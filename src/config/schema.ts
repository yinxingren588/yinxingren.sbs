import { SITE_URL, BRAND_NAME, BRAND_NAME_EN } from './site';
import { SEO_PAGES } from './seo';
import { FAQ_ITEMS } from '../data/faqData';

/**
 * 结构化数据映射表 (Schema.org JSON-LD)
 * 严格遵循规范要求：
 * 1. 严格基于真实第三方合作导航站身份，禁止虚构 Organization 主体、AggregateRating、Review、评分/评论数、下载量、Offer 价格
 * 2. 首页输出 WebSite + WebPage + FAQPage（与可见的 8 个 FAQ 完全一致）
 * 3. 首页不输出无意义的面包屑导航
 * 4. 内页输出 WebPage/CollectionPage 与和可见面包屑完全一致的 BreadcrumbList
 * 5. 严禁 SoftwareApplication（本站为信息与合作平台导航站，非软件产品本身）
 * 6. 严禁全站声明不存在的站内搜索功能 (SearchAction)，不因 /help/ 有局部搜索而虚构全站搜索
 * 7. 404 页面严格不输出任何结构化数据 (返回 null)
 * 8. 所有 @id、URL 严格基于 SITE_URL 动态生成，绝不硬编码外部域名、AFF 链接或 localhost
 */

// 对应页面可见面包屑末级显示名称（严格与 9 个内页 DOM 中 aria-label="面包屑导航" 实际显示的文本 100% 一致）
export const VISIBLE_BREADCRUMB_MAP: Record<string, string> = {
  '/services/': '服务介绍与架构',
  '/advantages/': '核心优势与选型价值',
  '/locations/': '节点网络与通道指南',
  '/pricing/': '套餐方案与选购指引',
  '/help/': '帮助中心与常见问题',
  '/downloads/': '客户端获取与安装',
  '/contact/': '联系方式与社群',
  '/terms/': '服务条款',
  '/privacy/': '隐私政策',
};

export function getStructuredDataForRoute(path: string): object | null {
  const normalized = path.endsWith('/') ? path : `${path}/`;
  const seo = SEO_PAGES[normalized];

  // 404 页面或未在 SEO 字典中登记的路径，严格不输出结构化数据
  if (!seo || seo.isNoIndex) {
    return null;
  }

  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${seo.canonical}#webpage`;

  // 1. 全站通用 WebSite 根节点声明（真实反映第三方指引站身份，绝不声明虚构的 SearchAction）
  const websiteSchema = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${SITE_URL}/`,
    name: BRAND_NAME,
    alternateName: BRAND_NAME_EN,
    description: SEO_PAGES['/'].description,
    inLanguage: 'zh-CN',
  };

  // 2. 首页 (/)：输出 WebSite + WebPage + FAQPage (与可见可展开的 8 个 FAQ 完全一致)
  if (normalized === '/') {
    const webpageSchema = {
      '@type': 'WebPage',
      '@id': webpageId,
      url: `${SITE_URL}/`,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': websiteId },
      inLanguage: 'zh-CN',
    };

    const faqSchema = {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      isPartOf: { '@id': webpageId },
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    };

    return {
      '@context': 'https://schema.org',
      '@graph': [websiteSchema, webpageSchema, faqSchema],
    };
  }

  // 3. 正式业务内页：输出 WebPage / CollectionPage + 与可见面包屑一致的 BreadcrumbList
  const isCollection = normalized === '/help/' || normalized === '/services/';
  const pageType = isCollection ? 'CollectionPage' : 'WebPage';

  const webpageSchema = {
    '@type': pageType,
    '@id': webpageId,
    url: seo.canonical,
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': websiteId },
    inLanguage: 'zh-CN',
  };

  const breadcrumbName = VISIBLE_BREADCRUMB_MAP[normalized] || seo.title;
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    '@id': `${seo.canonical}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首页',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: breadcrumbName,
        item: seo.canonical,
      },
    ],
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [websiteSchema, webpageSchema, breadcrumbSchema],
  };
}
