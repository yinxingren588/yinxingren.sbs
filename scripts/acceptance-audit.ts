import fs from 'node:fs';
import path from 'node:path';
import { APP_ROUTES } from '../src/config/routes';
import { SEO_PAGES } from '../src/config/seo';
import { SITE_URL, BRAND_NAME, OFFICIAL_URL, TELEGRAM_CHANNEL_URL, TELEGRAM_GROUP_URL } from '../src/config/site';
import { INDEXNOW_KEY, INDEXNOW_KEY_FILE } from './indexnow-engine';

console.log('================ FINAL ACCEPTANCE AUDIT ================\n');

const distDir = path.resolve(process.cwd(), 'dist');
const srcDir = path.resolve(process.cwd(), 'src');

// 1. 品牌污染与关键词核查
console.log('--- 1. Brand Contamination & Residue Audit ---');
const suspiciousPatterns = [
  'yinxingren.lol',
  'yinxingren.blog',
  'yinxingren.shop',
  'yinxingren.site',
  'example.com',
  '{',
  '}',
];

function scanFilesForPatterns(dir: string, ext: string[]): { file: string; match: string }[] {
  const results: { file: string; match: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        results.push(...scanFilesForPatterns(fullPath, ext));
      }
    } else if (ext.some((e) => entry.name.endsWith(e))) {
      // Exclude this script itself and json config files that legitimately hold templates/examples
      if (entry.name === 'acceptance-audit.ts' || entry.name === 'tsconfig.json' || entry.name === 'package.json') continue;
      const content = fs.readFileSync(fullPath, 'utf-8');
      for (const pat of suspiciousPatterns) {
        if (content.includes(pat)) {
          // If it's JSX brace {} or CSS brace {}, check context
          if (pat === '{' || pat === '}') {
            const hasUnreplacedBracket = /\{[A-Z0-9_]{3,}\}/.test(content) || /\{https?:\/\/[^}]+\}/.test(content);
            if (hasUnreplacedBracket) {
              results.push({ file: fullPath, match: 'Unreplaced placeholder {VAR}' });
            }
          } else {
            results.push({ file: fullPath, match: pat });
          }
        }
      }
    }
  }
  return results;
}

const srcResidues = scanFilesForPatterns(srcDir, ['.ts', '.tsx', '.css']);
const distHtmlResidues = scanFilesForPatterns(distDir, ['.html', '.xml', '.txt']);

console.log(`Source code residues: ${srcResidues.length === 0 ? 'CLEAN (0 found)' : JSON.stringify(srcResidues)}`);
console.log(`Dist build residues: ${distHtmlResidues.length === 0 ? 'CLEAN (0 found)' : JSON.stringify(distHtmlResidues)}`);

// 检查是否在正式文案/SEO/站点地址中残留 localhost
let localhostFound = false;
for (const [key, seo] of Object.entries(SEO_PAGES)) {
  if (seo.canonical.includes('localhost') || seo.title.includes('localhost') || seo.description.includes('localhost')) {
    localhostFound = true;
    console.error(`Error: localhost found in SEO_PAGES[${key}]`);
  }
}
console.log(`Localhost in SEO / Canonical: ${!localhostFound ? 'CLEAN (0 found)' : 'FAIL'}`);

// 2. AFF 逐页审计
console.log('\n--- 2. AFF & External Link Page-by-Page Audit ---');
const pages = [
  { name: '首页', path: '/', file: 'index.html' },
  { name: '服务介绍', path: '/services/', file: 'services/index.html' },
  { name: '核心优势', path: '/advantages/', file: 'advantages/index.html' },
  { name: '节点线路', path: '/locations/', file: 'locations/index.html' },
  { name: '订阅套餐', path: '/pricing/', file: 'pricing/index.html' },
  { name: '帮助中心', path: '/help/', file: 'help/index.html' },
  { name: '客户端下载', path: '/downloads/', file: 'downloads/index.html' },
  { name: '联系与社群', path: '/contact/', file: 'contact/index.html' },
  { name: '服务条款', path: '/terms/', file: 'terms/index.html' },
  { name: '隐私政策', path: '/privacy/', file: 'privacy/index.html' },
  { name: '404 错误页', path: '/404', file: '404.html' },
];

for (const p of pages) {
  const fullPath = path.join(distDir, p.file);
  if (!fs.existsSync(fullPath)) {
    console.error(`Missing HTML file: ${p.file}`);
    continue;
  }
  const html = fs.readFileSync(fullPath, 'utf-8');

  // Match all <a> tags with OFFICIAL_URL
  const affMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)].filter(
    (m) => m[1] === OFFICIAL_URL || m[1].includes('varnexa') || m[1].includes('invisibleaff')
  );

  const affDetails = affMatches.map((m) => {
    const rawTag = m[0];
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    const hasTargetBlank = rawTag.includes('target="_blank"');
    const hasSponsoredRel = rawTag.includes('rel="sponsored noopener noreferrer"');
    return { text, hasTargetBlank, hasSponsoredRel };
  });

  // Check footer for AFF
  const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/i);
  const footerAffCount = footerMatch
    ? [...footerMatch[0].matchAll(/href=["']([^"']*)["']/gi)].filter((m) => m[1] === OFFICIAL_URL).length
    : 0;

  console.log(`Page: ${p.path} (${p.name})`);
  console.log(`  - Total Rendered AFF in DOM: ${affMatches.length}`);
  affDetails.forEach((d, idx) => {
    console.log(`      [${idx + 1}] Text: "${d.text}" | target="_blank": ${d.hasTargetBlank} | rel="sponsored": ${d.hasSponsoredRel}`);
  });
  console.log(`  - Footer AFF count: ${footerAffCount}`);

  if (p.path === '/contact/') {
    // 检查 Telegram 链接
    const tgMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)].filter(
      (m) => m[1].startsWith('https://t.me/')
    );
    console.log(`  - Telegram Buttons in /contact/: ${tgMatches.length}`);
    tgMatches.forEach((m, idx) => {
      const text = m[2].replace(/<[^>]+>/g, '').trim();
      const hasTarget = m[0].includes('target="_blank"');
      const hasRel = m[0].includes('rel="noopener noreferrer"');
      console.log(`      [TG ${idx + 1}] URL: ${m[1]} | Text: "${text}" | target="_blank": ${hasTarget} | rel="noopener": ${hasRel}`);
    });
  }
}

// 3. 产物完整性审计
console.log('\n--- 3. Distribution Files Audit ---');
const expectedDistFiles = [
  'index.html',
  'services/index.html',
  'advantages/index.html',
  'locations/index.html',
  'pricing/index.html',
  'help/index.html',
  'downloads/index.html',
  'contact/index.html',
  'terms/index.html',
  'privacy/index.html',
  '404.html',
  'sitemap.xml',
  'robots.txt',
  'og-image.png',
  'favicon.ico',
  'apple-touch-icon.png',
  INDEXNOW_KEY_FILE,
  '_redirects',
  'vercel.json',
  '.htaccess',
  'nginx.conf.example',
];

expectedDistFiles.forEach((f) => {
  const p = path.join(distDir, f);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  console.log(`  - dist/${f}: ${exists ? 'EXISTS' : 'MISSING'} (${size} bytes)`);
});

console.log('\n================ AUDIT COMPLETED ================');
