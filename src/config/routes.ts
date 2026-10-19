import { SITE_URL } from './site';

export interface RouteMeta {
  path: string;            // 路由路径，统一末尾斜杠
  canonicalUrl: string;    // SITE_URL + path
  name: string;            // 页面标识
  navTitle?: string;       // 导航显示文本
  title: string;           // 独立SEO标题
  description: string;     // Meta Description
  allowAff: boolean;       // 是否允许显示AFF商业入口（terms/privacy/404强制false）
  showInNav?: boolean;     // 是否在顶部主导航栏展示
  showInFooter?: boolean;  // 是否在页脚栏目展示
  priority: number;        // Sitemap优先级
  changefreq: 'daily' | 'weekly' | 'monthly';
}

export const APP_ROUTES: RouteMeta[] = [
  {
    path: '/',
    canonicalUrl: `${SITE_URL}/`,
    name: 'home',
    navTitle: '首页',
    title: '隐形人 - 品牌信息展示与合作平台导航',
    description: '隐形人（Invisible Network）专注于跨域网络连接指引、多终端配置说明及合作平台通道导航。',
    allowAff: true,
    showInNav: false,
    showInFooter: false,
    priority: 1.0,
    changefreq: 'daily',
  },
  {
    path: '/services/',
    canonicalUrl: `${SITE_URL}/services/`,
    name: 'services',
    navTitle: '服务介绍',
    title: '服务介绍与传输架构 - 隐形人',
    description: '了解隐形人合作平台的网络分流架构、多端兼容协议与服务接入指南。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/advantages/',
    canonicalUrl: `${SITE_URL}/advantages/`,
    name: 'advantages',
    navTitle: '核心优势',
    title: '核心优势与隐私保护 - 隐形人',
    description: '探索隐形人合作平台的稳定分流、端到端隐私保护机制与轻量化体验设计。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/locations/',
    canonicalUrl: `${SITE_URL}/locations/`,
    name: 'locations',
    navTitle: '节点线路',
    title: '节点网络与线路测速 - 隐形人',
    description: '查看隐形人合作平台的节点接入机制、通道调度与实时测速指引。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/pricing/',
    canonicalUrl: `${SITE_URL}/pricing/`,
    name: 'pricing',
    navTitle: '订阅套餐',
    title: '套餐方案与选购指引 - 隐形人',
    description: '对比合作平台各周期套餐规格，获取合理的选购方案建议与订阅注意事项。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/help/',
    canonicalUrl: `${SITE_URL}/help/`,
    name: 'help',
    navTitle: '帮助中心',
    title: '帮助中心与排错指引 - 隐形人',
    description: '提供常见配置问题解答、多端连接排错技巧与网络诊断指南。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.8,
    changefreq: 'weekly',
  },
  {
    path: '/downloads/',
    canonicalUrl: `${SITE_URL}/downloads/`,
    name: 'downloads',
    navTitle: '客户端下载',
    title: '客户端下载与安装 - 隐形人',
    description: '汇集 Windows、macOS、iOS、Android 等多终端客户端下载渠道与安装指引。',
    allowAff: true,
    showInNav: false,
    showInFooter: true,
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/contact/',
    canonicalUrl: `${SITE_URL}/contact/`,
    name: 'contact',
    navTitle: '联系我们',
    title: '联系我们与Telegram社群 - 隐形人',
    description: '获取隐形人官方Telegram频道与交流群入口，参与社群交流与接收实时公告。',
    allowAff: true,
    showInNav: true,
    showInFooter: true,
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/terms/',
    canonicalUrl: `${SITE_URL}/terms/`,
    name: 'terms',
    navTitle: '服务条款',
    title: '服务条款与免责声明 - 隐形人',
    description: '阅读隐形人导航站服务条款、推广合作申明、知识产权与用户行为规范。',
    allowAff: false,
    showInNav: false,
    showInFooter: true,
    priority: 0.3,
    changefreq: 'monthly',
  },
  {
    path: '/privacy/',
    canonicalUrl: `${SITE_URL}/privacy/`,
    name: 'privacy',
    navTitle: '隐私政策',
    title: '隐私权保护政策 - 隐形人',
    description: '隐形人重视访问者隐私，了解本站对浏览日志与Cookie的处理原则。',
    allowAff: false,
    showInNav: false,
    showInFooter: true,
    priority: 0.3,
    changefreq: 'monthly',
  },
];

/**
 * 辅助方法：根据路径查找路由元信息
 */
export function getRouteMeta(pathname: string): RouteMeta | undefined {
  // 规范化末尾斜杠
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  return APP_ROUTES.find((r) => r.path === normalized);
}

/**
 * 判断指定页面是否允许呈现AFF商业入口
 */
export function isAffAllowedOnPath(pathname: string): boolean {
  const meta = getRouteMeta(pathname);
  if (!meta) {
    // 404 或未登记页面一律禁止AFF
    return false;
  }
  return meta.allowAff;
}
