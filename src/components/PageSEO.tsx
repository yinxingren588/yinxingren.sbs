import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getSeoForPath,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_ALT,
} from '../config/seo';
import { BRAND_NAME } from '../config/site';
import { getStructuredDataForRoute } from '../config/schema';

function setMetaTag(nameOrProp: string, value: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  el.content = value;
}

function removeMetaTag(nameOrProp: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  const el = document.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
}

function setCanonicalTag(url: string | null) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!url) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = url;
}

/**
 * 管理客户端 Schema.org JSON-LD 单一实例与更新
 * 规则：基于固定 id="structured-data" 单例维护，就地更新，禁止重复追加；404 时安全移除
 */
function updateStructuredData(pathname: string) {
  const structuredData = getStructuredDataForRoute(pathname);
  let scriptEl = document.getElementById('structured-data') as HTMLScriptElement | null;

  if (structuredData) {
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.id = 'structured-data';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(structuredData);
  } else {
    // 404 或无结构化数据的页面，移除现有 script，确保 0 结构化数据
    if (scriptEl && scriptEl.parentNode) {
      scriptEl.parentNode.removeChild(scriptEl);
    }
  }
}

export const PageSEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);

    // 1. 设置 Title
    document.title = seo.title;

    // 2. 设置语言
    document.documentElement.lang = 'zh-CN';

    // 3. 处理 404 与正常页面差异
    if (seo.isNoIndex) {
      setMetaTag('robots', 'noindex, nofollow');
      setMetaTag('description', seo.description);
      removeMetaTag('keywords');
      setCanonicalTag(null);

      // 404 严格移除 OG 与 Twitter 标签
      const ogAndTwitterProps = [
        ['og:type', true],
        ['og:site_name', true],
        ['og:title', true],
        ['og:description', true],
        ['og:url', true],
        ['og:image', true],
        ['og:image:width', true],
        ['og:image:height', true],
        ['og:image:alt', true],
        ['og:locale', true],
        ['twitter:card', false],
        ['twitter:title', false],
        ['twitter:description', false],
        ['twitter:image', false],
      ] as const;

      ogAndTwitterProps.forEach(([tag, isProp]) => removeMetaTag(tag, isProp));
    } else {
      // 正常收录页面
      setMetaTag('robots', 'index, follow');
      setMetaTag('description', seo.description);
      if (seo.keywords.length > 0) {
        setMetaTag('keywords', seo.keywords.join(', '));
      }
      setCanonicalTag(seo.canonical);

      // Open Graph
      setMetaTag('og:type', seo.ogType, true);
      setMetaTag('og:site_name', BRAND_NAME, true);
      setMetaTag('og:title', seo.title, true);
      setMetaTag('og:description', seo.description, true);
      setMetaTag('og:url', seo.canonical, true);
      setMetaTag('og:image', OG_IMAGE_URL, true);
      setMetaTag('og:image:width', OG_IMAGE_WIDTH, true);
      setMetaTag('og:image:height', OG_IMAGE_HEIGHT, true);
      setMetaTag('og:image:alt', OG_IMAGE_ALT, true);
      setMetaTag('og:locale', 'zh_CN', true);

      // Twitter Card
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:title', seo.title);
      setMetaTag('twitter:description', seo.description);
      setMetaTag('twitter:image', OG_IMAGE_URL);
    }

    // 4. 更新结构化数据（客户端单例，不重复累加）
    updateStructuredData(location.pathname);
  }, [location.pathname]);

  return null;
};
