import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../src/AppRoutes';
import {
  SEO_PAGES,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_ALT,
} from '../src/config/seo';
import { BRAND_NAME } from '../src/config/site';
import { getStructuredDataForRoute } from '../src/config/schema';
import {
  generateSitemapXml,
  generateRobotsTxt,
  getIndexableSitemapEntries,
} from '../src/config/sitemap';
import { ensureKeyFiles, INDEXNOW_KEY_FILE } from './indexnow-engine';

const distDir = path.resolve(process.cwd(), 'dist');
const publicDir = path.resolve(process.cwd(), 'public');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf-8');

// 10 个正式页面 + 404 错误页
const routes = [
  { path: '/', key: '/', targetFile: 'index.html' },
  { path: '/services/', key: '/services/', targetFile: 'services/index.html' },
  { path: '/advantages/', key: '/advantages/', targetFile: 'advantages/index.html' },
  { path: '/locations/', key: '/locations/', targetFile: 'locations/index.html' },
  { path: '/pricing/', key: '/pricing/', targetFile: 'pricing/index.html' },
  { path: '/help/', key: '/help/', targetFile: 'help/index.html' },
  { path: '/downloads/', key: '/downloads/', targetFile: 'downloads/index.html' },
  { path: '/contact/', key: '/contact/', targetFile: 'contact/index.html' },
  { path: '/terms/', key: '/terms/', targetFile: 'terms/index.html' },
  { path: '/privacy/', key: '/privacy/', targetFile: 'privacy/index.html' },
  { path: '/non-existent-404-check/', key: '404', targetFile: '404.html' },
];

console.log('=== Step 10 & 11: Pre-rendering 10 Pages + 404 HTML with Schema.org JSON-LD ===');

for (const route of routes) {
  const seo = SEO_PAGES[route.key];
  if (!seo) {
    console.warn(`No SEO config found for route key: ${route.key}`);
    continue;
  }

  // 服务端渲染完整 React 页面树（包含唯一 H1、主体正文与内部链接）
  const appHtml = renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: [route.path] },
      React.createElement(AppRoutes)
    )
  );

  let html = template;

  // 1. 设置 html lang="zh-CN"
  html = html.replace(/<html[^>]*>/i, '<html lang="zh-CN">');

  // 2. 替换 title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`);

  // 3. 构建 Head Meta 标签组
  const metaTags: string[] = [];

  if (seo.isNoIndex) {
    // 404 页面规则：严格 noindex, nofollow；绝不输出 Canonical、OG、Twitter 与结构化数据
    metaTags.push('<meta name="robots" content="noindex, nofollow" />');
    metaTags.push(`<meta name="description" content="${seo.description}" />`);
  } else {
    // 正式页面规则：正常收录与全套社交分享
    metaTags.push('<meta name="robots" content="index, follow" />');
    metaTags.push(`<meta name="description" content="${seo.description}" />`);
    if (seo.keywords.length > 0) {
      metaTags.push(`<meta name="keywords" content="${seo.keywords.join(', ')}" />`);
    }
    metaTags.push(`<link rel="canonical" href="${seo.canonical}" />`);

    // Open Graph
    metaTags.push(`<meta property="og:type" content="${seo.ogType}" />`);
    metaTags.push(`<meta property="og:site_name" content="${BRAND_NAME}" />`);
    metaTags.push(`<meta property="og:title" content="${seo.title}" />`);
    metaTags.push(`<meta property="og:description" content="${seo.description}" />`);
    metaTags.push(`<meta property="og:url" content="${seo.canonical}" />`);
    metaTags.push(`<meta property="og:image" content="${OG_IMAGE_URL}" />`);
    metaTags.push(`<meta property="og:image:width" content="${OG_IMAGE_WIDTH}" />`);
    metaTags.push(`<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}" />`);
    metaTags.push(`<meta property="og:image:alt" content="${OG_IMAGE_ALT}" />`);
    metaTags.push(`<meta property="og:locale" content="zh_CN" />`);

    // Twitter Card
    metaTags.push('<meta name="twitter:card" content="summary_large_image" />');
    metaTags.push(`<meta name="twitter:title" content="${seo.title}" />`);
    metaTags.push(`<meta name="twitter:description" content="${seo.description}" />`);
    metaTags.push(`<meta name="twitter:image" content="${OG_IMAGE_URL}" />`);

    // Schema.org JSON-LD 结构化数据 (注入带稳定唯一 id="structured-data"，保障客户端与 SSR 单例不重复)
    const structuredData = getStructuredDataForRoute(route.key);
    if (structuredData) {
      metaTags.push(
        `<script type="application/ld+json" id="structured-data">${JSON.stringify(
          structuredData
        )}</script>`
      );
    }
  }

  // 清除已有模板 description、keywords、robots、canonical 标签与已有结构化数据标签，避免重复
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']keywords["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']robots["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<script[^>]*id=["']structured-data["'][^>]*>[\s\S]*?<\/script>/gi, '');

  const headInjection = '\n    ' + metaTags.join('\n    ') + '\n  ';
  html = html.replace('</head>', `${headInjection}</head>`);

  // 4. 将完整渲染出的 HTML 注入 <div id="root">
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  const fullTargetPath = path.join(distDir, route.targetFile);
  const targetDir = path.dirname(fullTargetPath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(fullTargetPath, html, 'utf-8');
  console.log(`Prerendered: dist/${route.targetFile} (Length: ${html.length} bytes, AppHtml: ${appHtml.length} bytes)`);
}

console.log('=== Step 11: Generating sitemap.xml & robots.txt ===');

// 1. 生成并写入 sitemap.xml
const sitemapXml = generateSitemapXml();
const sitemapEntries = getIndexableSitemapEntries();
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`Generated sitemap.xml with ${sitemapEntries.length} verified URLs:`);
sitemapEntries.forEach((e) => console.log(`  - ${e.loc} (lastmod: ${e.lastmod || 'omitted'})`));

// 2. 生成并写入 robots.txt
const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');
console.log('Generated robots.txt successfully.');

// 3. 确保 IndexNow Key 文件存在于 public/ 与 dist/
ensureKeyFiles(true);
console.log(`Ensured IndexNow Key file: ${INDEXNOW_KEY_FILE}`);

console.log('All Step 11 & 12 prerender tasks completed successfully!');
