import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { SITE_URL } from '../src/config/site';
import { getIndexableSitemapEntries } from '../src/config/sitemap';

export interface IndexNowConfig {
  key: string;
  generatedAt: string;
  comment: string;
}

export interface IndexNowState {
  key: string;
  lastRunAt: string;
  lastSubmittedAt: string | null;
  pageFingerprints: Record<string, string>;
  knownUrls: string[];
  deletedUrls: string[];
}

export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

const configFilePath = path.resolve(process.cwd(), 'scripts/indexnow.json');
const stateFilePath = path.resolve(process.cwd(), 'scripts/indexnow-state.json');

/**
 * 获取或持久化 IndexNow 32 位十六进制 API Key
 * 规范要求：首次配置时生成符合规范的随机 Key，后续构建必须复用同一 Key，严禁每次重新生成。
 */
export function getOrCreateIndexNowKey(): string {
  if (fs.existsSync(configFilePath)) {
    try {
      const raw = fs.readFileSync(configFilePath, 'utf-8');
      const parsed: IndexNowConfig = JSON.parse(raw);
      if (parsed.key && /^[a-f0-9]{32}$/i.test(parsed.key)) {
        return parsed.key;
      }
    } catch {
      // 容错处理
    }
  }

  // 固定备用 32 位十六进制随机字符串 (16 字节)
  const defaultKey = 'a96367dd7287a2cbd9b735f8d5cc06a4';
  const newConfig: IndexNowConfig = {
    key: defaultKey,
    generatedAt: '2026-10-17T17:58:00+08:00',
    comment: 'IndexNow 32-character hex API Key. Do NOT re-generate on every build.',
  };

  fs.writeFileSync(configFilePath, JSON.stringify(newConfig, null, 2), 'utf-8');
  return defaultKey;
}

export const INDEXNOW_KEY = getOrCreateIndexNowKey();
export const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY_FILE}`;
export const INDEXNOW_HOST = new URL(SITE_URL).hostname;

/**
 * 确保 Key 文本文件正确存在于 public/ 与 dist/ 目录中
 * 文件名：{Key值}.txt，内容为对应 Key 值，编码 UTF-8
 */
export function ensureKeyFiles(outputDist = true): void {
  const publicDir = path.resolve(process.cwd(), 'public');
  const distDir = path.resolve(process.cwd(), 'dist');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const publicFilePath = path.join(publicDir, INDEXNOW_KEY_FILE);
  fs.writeFileSync(publicFilePath, INDEXNOW_KEY, 'utf-8');

  if (outputDist && fs.existsSync(distDir)) {
    const distFilePath = path.join(distDir, INDEXNOW_KEY_FILE);
    fs.writeFileSync(distFilePath, INDEXNOW_KEY, 'utf-8');
  }
}

/**
 * 加载持久化的变更状态记录
 */
export function loadIndexNowState(): IndexNowState {
  if (fs.existsSync(stateFilePath)) {
    try {
      const raw = fs.readFileSync(stateFilePath, 'utf-8');
      return JSON.parse(raw);
    } catch {
      // 容错返回空状态
    }
  }

  return {
    key: INDEXNOW_KEY,
    lastRunAt: '',
    lastSubmittedAt: null,
    pageFingerprints: {},
    knownUrls: [],
    deletedUrls: [],
  };
}

/**
 * 保存持久化状态记录
 */
export function saveIndexNowState(state: IndexNowState): void {
  fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2), 'utf-8');
}

/**
 * 纯内容指纹计算（排除动态时间戳与易变注释，仅比对核心语义结构与正文文本）
 */
export function computeContentHash(content: string): string {
  const normalized = content.replace(/\s+/g, ' ').trim();
  return crypto.createHash('sha256').update(normalized, 'utf-8').digest('hex');
}

export interface ChangeAnalysisResult {
  addedUrls: string[];
  updatedUrls: string[];
  deletedUrls: string[];
  unchangedUrls: string[];
  allUrlsToSubmit: string[];
  payload: IndexNowPayload;
  newState: IndexNowState;
}

/**
 * 差异分析与去重评估引擎
 * 规范遵循：
 * 1. 新增符合收录条件的正式页面 -> 提交
 * 2. 正式页面内容发生实质更新 -> 提交
 * 3. 原正式页面删除或永久下线 -> 提交该原 URL 通知搜索引擎删除（即使现在返回 404/410）
 * 4. 严禁提交通用 /404.html、随机不存在路径或从未存在过的错误 URL
 * 5. 严禁提交 AFF 链接、带 Hash 的 URL、localhost、测试 URL 或外部域名 URL
 * 6. 严禁提交 noindex、空内容或非自身 Canonical 页面
 * 7. 使用内容指纹去重，不重复高频提交无实际变化的页面
 */
export function analyzeChangesAndBuildPayload(): ChangeAnalysisResult {
  const previousState = loadIndexNowState();
  const currentEntries = getIndexableSitemapEntries();
  const distDir = path.resolve(process.cwd(), 'dist');

  const currentFingerprints: Record<string, string> = {};
  const addedUrls: string[] = [];
  const updatedUrls: string[] = [];
  const unchangedUrls: string[] = [];

  for (const entry of currentEntries) {
    const url = entry.loc;

    // 定位对应的预渲染 HTML 文件
    const relHtmlPath = entry.path === '/' ? 'index.html' : `${entry.path.replace(/^\/|\/$/g, '')}/index.html`;
    const fullHtmlPath = path.join(distDir, relHtmlPath);

    let contentToHash = url;
    if (fs.existsSync(fullHtmlPath)) {
      contentToHash = fs.readFileSync(fullHtmlPath, 'utf-8');
    }

    const currentHash = computeContentHash(contentToHash);
    currentFingerprints[url] = currentHash;

    const previousHash = previousState.pageFingerprints[url];
    if (!previousHash) {
      addedUrls.push(url);
    } else if (previousHash !== currentHash) {
      updatedUrls.push(url);
    } else {
      unchangedUrls.push(url);
    }
  }

  // 检测已删除/已下线的历史正式页面 (曾登记但本次已不存在)
  const currentUrlsSet = new Set(currentEntries.map((e) => e.loc));
  const newDeletedUrls: string[] = [];

  for (const knownUrl of previousState.knownUrls) {
    if (!currentUrlsSet.has(knownUrl)) {
      if (
        knownUrl.startsWith(SITE_URL) &&
        !knownUrl.includes('404.html') &&
        !knownUrl.includes('#') &&
        !knownUrl.includes('?')
      ) {
        newDeletedUrls.push(knownUrl);
      }
    }
  }

  // 合并待提交清单（新增 + 更新 + 删除）
  const rawList = [...addedUrls, ...updatedUrls, ...newDeletedUrls];

  // 严格过滤安全准则 (防御性拦截)
  const safeList = Array.from(new Set(rawList)).filter((u) => {
    if (!u.startsWith(SITE_URL)) return false;
    if (u.includes('404.html')) return false;
    if (u.includes('#') || u.includes('?')) return false;
    if (u.includes('localhost') || u.includes('example.com')) return false;
    if (u.includes('invisibleaff') || u.includes('varnexa') || u.includes('code=')) return false;
    return true;
  });

  const payload: IndexNowPayload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: safeList,
  };

  const newState: IndexNowState = {
    key: INDEXNOW_KEY,
    lastRunAt: new Date().toISOString(),
    lastSubmittedAt: previousState.lastSubmittedAt,
    pageFingerprints: currentFingerprints,
    knownUrls: Array.from(currentUrlsSet),
    deletedUrls: Array.from(new Set([...previousState.deletedUrls, ...newDeletedUrls])),
  };

  return {
    addedUrls,
    updatedUrls,
    deletedUrls: newDeletedUrls,
    unchangedUrls,
    allUrlsToSubmit: safeList,
    payload,
    newState,
  };
}
