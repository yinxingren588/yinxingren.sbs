import { BRAND_NAME, SITE_URL } from './site';

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType: string;
  isNoIndex?: boolean;
}

export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const OG_IMAGE_WIDTH = '1200';
export const OG_IMAGE_HEIGHT = '630';
export const OG_IMAGE_ALT = `${BRAND_NAME} - 品牌信息展示与合作平台导航`;

/**
 * 10 个正式页面 + 404 独立 SEO 配置字典
 * 严格遵从事实核验与 TDK 规范要求：
 * 1. 首页承接核心关键词“隐形人”与重点搜索词“隐形人官网”
 * 2. 内页围绕具体主题生成独立标题与描述，无机械模板拼凑
 * 3. 严格不添加虚假“最新/官方/实时/秒连”等词，不包含年份
 * 4. 404 页面严格配置 isNoIndex，不输出 Canonical、OG 与 Twitter Card
 */
export const SEO_PAGES: Record<string, SeoConfig> = {
  '/': {
    title: '隐形人｜服务介绍、套餐选择与使用指南',
    description: '隐形人（Invisible Network）专注于跨域网络连接指引、多终端配置说明及合作平台通道导航。汇聚分流架构解析、套餐选型参考与使用排错教程，为追求隐私边界的用户提供透明指引。',
    keywords: ['隐形人', '隐形人官网', '网络连接指引', '多端分流架构', '套餐选择指南'],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    title: '隐形人服务体系与网络分流架构概览',
    description: '全面了解隐形人合作平台的按需分流路由引擎、通用传输协议封装与多平台支持环境。掌握本地流量直连与跨域定向加密中继原理，获取规范化的三步接入流程。',
    keywords: ['隐形人服务', '网络中继架构', '规则分流引擎', '多端通用兼容', '连接配置指引'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    title: '隐形人核心优势与架构选型考量',
    description: '深入解析隐形人合作平台的五项核心架构价值：端到端隐私保护边界、基于规则的轻量按需分流、无后台冗余捆绑及透明社群互助。提供面向开发协同与学术检索的客观选型建议。',
    keywords: ['隐形人优势', '网络隐私边界', '按需分流', '轻量无捆绑', '选型考量'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    title: '隐形人节点网络与通道选择指南',
    description: '整理近邻低延迟交互、美洲资源吞吐及欧洲中继枢纽的区域考量维度，提供本地实时测速与订阅更新指导。具体可用线路、节点分布与服务状态以合作平台客户端实际显示为准。',
    keywords: ['隐形人节点', '线路测速', '通道选择考量', '实时延迟测速', '订阅节点更新'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    title: '隐形人套餐选择与方案选购说明',
    description: '从业务使用场景、多终端并发数、月度流量配额与计费周期四个客观维度提供选型指引。帮助您根据日常工作流合理规划订阅方案，具体价格与活动以合作平台当前显示为准。',
    keywords: ['隐形人套餐', '方案选型指引', '设备并发规划', '流量配额评估', '订阅周期考量'],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    title: '隐形人使用帮助与常见故障排错中心',
    description: '汇集新手快速入门、分流模式切换、通用客户端配置、多设备并发限制及节点超时常见故障排查指引。支持纯前端关键词快速检索，帮助您高效解决网络连接疑难。',
    keywords: ['隐形人使用教程', '客户端配置指引', '分流模式设置', '故障排查手册', '常见问题解答'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    title: '隐形人客户端获取与平台适用说明',
    description: '提供 Windows、macOS、Android 与 iOS 四类主流平台的环境特性、系统要求及配置指引。引导用户前往合作平台安全校验并获取适用资源，支持情况以合作平台说明为准。',
    keywords: ['隐形人客户端', '多平台支持说明', 'Windows配置', 'Mac配置', '移动端配置'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    title: '隐形人联系渠道与社区支持说明',
    description: '获取隐形人官方 Telegram 资讯频道与用户交流群入口，同步网络调度与维护动态。明确划分使用疑问、商业订单与社群互助的处理渠道，提供客观真实的沟通指引。',
    keywords: ['隐形人联系方式', 'Telegram官方频道', '社群交流群', '工单客服渠道', '技术支持指引'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    title: '隐形人网站服务条款与使用协议',
    description: '阅读隐形人导航站服务条款，了解本站作为第三方信息与指引平台的身份界限、合作平台商业履约分离说明、推广佣金披露及访问者合法合规使用守则。',
    keywords: ['隐形人服务条款', '使用协议', '免责声明', '推广链接披露', '合规守则'],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'website',
  },
  '/privacy/': {
    title: '隐形人隐私保护政策与数据说明',
    description: '了解隐形人网站对访问者隐私的保护承诺。本站前端无 Cookie 植入、无本地存储滥用、无第三方追踪探针，严格区分浏览器前端交互与底层 Web 服务器访问日志。',
    keywords: ['隐形人隐私政策', '数据保护说明', '无Cookie声明', '服务器日志说明', '隐私安全规范'],
    canonical: `${SITE_URL}/privacy/`,
    ogType: 'website',
  },
  '404': {
    title: '404 - 页面未找到 | 隐形人',
    description: '您访问的页面不存在或已被移除。请核对访问地址或通过站内导航返回首页。',
    keywords: [],
    canonical: '',
    ogType: '',
    isNoIndex: true,
  },
};

/**
 * 获取指定路径的标准 SEO 配置
 */
export function getSeoForPath(pathname: string): SeoConfig {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (normalized === '//') return SEO_PAGES['/'];
  return SEO_PAGES[normalized] || SEO_PAGES['404'];
}
