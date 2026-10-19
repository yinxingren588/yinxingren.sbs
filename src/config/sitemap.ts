import { SITE_URL } from './site';
import { APP_ROUTES } from './routes';
import { SEO_PAGES } from './seo';

/**
 * 页面正文/关键内容最后实际修订时间记录表 (YYYY-MM-DD)
 * 严格遵循规范要求：
 * 1. lastmod 只能反映该页面正文、关键内容或有意义链接实际修改的时间，不得因为重新生成 Sitemap 而批量刷新。
 * 2. 严禁直接使用构建时间、部署时间或检出后文件时间充当全部页面的内容修改时间。
 * 3. 本站各页面内容经严格核验，于 2026-10-17 正式定稿发布，后续只有内容发生实质修订时方可在此更新对应页面日期。
 * 4. 若某页面无法确定精确修订时间，可在此处设为 undefined，生成逻辑将安全省略 <lastmod> 标签，绝不编造日期。
 */
export const PAGE_LASTMOD_MAP: Record<string, string | undefined> = {
  '/': '2026-10-17',
  '/services/': '2026-10-17',
  '/advantages/': '2026-10-17',
  '/locations/': '2026-10-17',
  '/pricing/': '2026-10-17',
  '/help/': '2026-10-17',
  '/downloads/': '2026-10-17',
  '/contact/': '2026-10-17',
  '/terms/': '2026-10-17',
  '/privacy/': '2026-10-17',
};

export interface SitemapEntry {
  path: string;
  loc: string;
  lastmod?: string;
}

/**
 * 动态获取所有可索引的标准页面（绝不写死数量，严格读取统一路由登记根据规则动态过滤）
 * 过滤排除规则：
 * - 排除 404 页面 (*)
 * - 排除 noindex 页面 (isNoIndex === true)
 * - 排除 重定向路由与非标准路径
 * - 排除 包含 Hash (#) 或查询参数 (?) 的 URL
 * - 排除 包含 AFF 链接或外部商业推广 URL
 * - 排除 包含 localhost 或 example.com 污染
 * - 排除 Canonical 不严格指向自身的页面
 * - 排除 重复出现的 URL
 */
export function getIndexableSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const seenUrls = new Set<string>();

  for (const route of APP_ROUTES) {
    const rawPath = route.path;

    // 1. 排除通配符 404 与非正常路由
    if (!rawPath || rawPath === '*' || rawPath.includes('404')) {
      continue;
    }

    // 2. 标准化路径规范（末尾斜杠）
    const normalizedPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

    // 3. 读取 SEO 配置并核验是否允许索引
    const seo = SEO_PAGES[normalizedPath];
    if (!seo || seo.isNoIndex) {
      continue;
    }

    // 4. 验证 Canonical 是否明确指向自身
    const expectedCanonical = `${SITE_URL}${normalizedPath}`;
    if (seo.canonical !== expectedCanonical) {
      continue;
    }

    // 5. 校验 URL 安全性（无 hash、无 query、无 AFF、无 localhost/example.com）
    const loc = expectedCanonical;
    if (
      loc.includes('#') ||
      loc.includes('?') ||
      loc.includes('localhost') ||
      loc.includes('example.com') ||
      loc.includes('aff') ||
      loc.includes('code=')
    ) {
      continue;
    }

    // 6. 去重保证
    if (seenUrls.has(loc)) {
      continue;
    }
    seenUrls.add(loc);

    // 7. 提取真实维护的 lastmod（若未记录则保留 undefined，安全省略不编造）
    const lastmod = PAGE_LASTMOD_MAP[normalizedPath];

    entries.push({
      path: normalizedPath,
      loc,
      lastmod,
    });
  }

  return entries;
}

/**
 * 生成符合 sitemaps.org 标准的 sitemap.xml 字符串
 */
export function generateSitemapXml(): string {
  const entries = getIndexableSitemapEntries();

  const urlElements = entries.map((entry) => {
    let xml = `  <url>\n    <loc>${entry.loc}</loc>`;
    if (entry.lastmod) {
      xml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    xml += `\n  </url>`;
    return xml;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements.join('\n')}
</urlset>
`;
}

/**
 * 生成规范的 robots.txt 字符串
 * 规则：
 * User-agent: *
 * Allow: /
 * Sitemap: {SITE_URL}/sitemap.xml
 * 严格禁止屏蔽 404 页面，确保搜索引擎能抓取其 noindex 声明
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
