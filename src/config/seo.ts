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
    title: '隐形人官网｜隐形人机场 - 节点线路、套餐订阅与多端配置指南',
    description: '隐形人官网（Invisible Network）为用户提供专业稳定的隐形人机场节点线路导航、9大主力订阅套餐选购及多终端客户端配置教程。全IPLC专线、晚高峰不限速、原生IP解锁主流流媒体与ChatGPT，为追求隐私与高速网络的用户提供官方通道指引。',
    keywords: ['隐形人', '隐形人官网', '隐形人机场', '隐形人机场官网', '隐形人节点', '隐形人机场节点', '隐形人订阅', '隐形人加速器', '隐形人梯子'],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    title: '隐形人机场服务体系与网络分流架构概览 - 隐形人官网',
    description: '全面了解隐形人机场按需分流路由引擎、全IPLC专线传输协议封装与多平台支持环境。通过隐形人官网获取规范化的三步接入流程与客户端指引。',
    keywords: ['隐形人服务', '隐形人机场', '隐形人官网', '隐形人机场节点', '网络中继架构', '规则分流引擎'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    title: '隐形人机场核心优势与专线选型考量 - 隐形人官网',
    description: '深入解析隐形人机场六项核心架构优势：全IPLC专线低延迟、晚高峰不限速、原生IP解锁主流流媒体与ChatGPT、不限在线设备数。隐形人官网提供客观选型建议。',
    keywords: ['隐形人优势', '隐形人机场', '隐形人官网', '全IPLC专线', '晚高峰不限速', '流媒体解锁'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    title: '隐形人机场节点网络与线路测速指南 - 隐形人官网',
    description: '查看隐形人机场全球优质节点分布，涵盖香港、台湾、日本、新加坡、美国、欧洲等核心枢纽。隐形人官网提供本地实时测速与一键订阅更新指导。',
    keywords: ['隐形人节点', '隐形人机场节点', '隐形人官网', '香港节点', '日本节点', '专线测速'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    title: '隐形人机场套餐价格与9大规格方案说明 - 隐形人官网',
    description: '隐形人官网公布隐形人机场9大官方主力配套规格与资费，包含星耀风暴（¥109/年）、白银纪元、黄金序列等6档周期订阅，以及160GB-1TB一次性买断包。',
    keywords: ['隐形人套餐', '隐形人机场套餐', '隐形人官网', '隐形人机场价格', '星耀风暴', '买断流量包'],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    title: '隐形人机场使用教程与常见排错帮助中心 - 隐形人官网',
    description: '隐形人官网帮助中心提供隐形人机场新手快速上手指南、Clash/Sing-box/Shadowrocket等多端客户端配置教程及常见连接疑难排查。',
    keywords: ['隐形人使用教程', '隐形人机场配置', '隐形人官网', 'Clash配置', '故障排查手册', '常见问题解答'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    title: '隐形人机场客户端下载与多平台配置说明 - 隐形人官网',
    description: '隐形人官网汇集Windows、macOS、Android与iOS主流操作系统客户端下载与配置指南。通过隐形人机场官方校验通道获取安全无毒客户端。',
    keywords: ['隐形人客户端', '隐形人机场下载', '隐形人官网', 'Windows客户端', 'Mac客户端', 'iOS配置'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    title: '联系我们与Telegram官方社群 - 隐形人官网',
    description: '获取隐形人机场官方Telegram公告频道与用户交流群入口。通过隐形人官网获取官方技术支持、节点维护通告与售后工单指引。',
    keywords: ['隐形人联系我们', '隐形人机场', '隐形人官网', 'Telegram官方频道', '交流群', '客服渠道'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    title: '隐形人网站服务条款与使用协议 - 隐形人官网',
    description: '阅读隐形人导航站服务条款，了解本站作为第三方信息与指引平台的身份界限、合作平台商业履约分离说明、推广佣金披露及访问者合法合规使用守则。',
    keywords: ['隐形人服务条款', '隐形人官网', '使用协议', '免责声明', '推广链接披露', '合规守则'],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'website',
  },
  '/privacy/': {
    title: '隐形人隐私保护政策与数据说明 - 隐形人官网',
    description: '了解隐形人网站对访问者隐私的保护承诺。本站前端无 Cookie 植入、无本地存储滥用、无第三方追踪探针，严格区分浏览器前端交互与底层 Web 服务器访问日志。',
    keywords: ['隐形人隐私政策', '隐形人官网', '数据保护说明', '无Cookie声明', '服务器日志说明', '隐私安全规范'],
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
