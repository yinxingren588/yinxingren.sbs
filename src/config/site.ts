/**
 * 全局站点与品牌固定资料配置
 * 严格遵循规范：纯字符串常量，无大括号，无Markdown符号，正式域名不含末尾斜杠
 */

export const BRAND_NAME = '隐形人';
export const BRAND_NAME_EN = 'Invisible Network'; // 本站英文展示名（仅作为本站展示使用，非官方注册英文名）
export const SITE_URL = 'https://yinxingren.sbs';
export const OFFICIAL_URL = 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy';
export const PRIMARY_KEYWORD = '隐形人';
export const SECONDARY_KEYWORD = '隐形人官网';
export const AIRPORT_KEYWORD = '隐形人机场';
export const OFFICIAL_KEYWORD = '隐形人官网';
export const TELEGRAM_CHANNEL_URL = 'https://t.me/+diFXhmhTx-E4Mjc1';
export const TELEGRAM_GROUP_URL = 'https://t.me/+YnHn1D4JK7c2Yjg1';

/**
 * 站点身份定位记录
 * 规则：未获得品牌自营或官方明确书面授权证据前，严禁标记为官方品牌站
 */
export const SITE_IDENTITY = {
  isOfficial: false,
  role: 'THIRD_PARTY_PARTNER_GUIDE',
  displayName: '第三方合作平台导航与服务指引站',
  description: '隐形人官网专注于为跨域浏览与多终端互联提供隐形人机场节点线路导航、9大主力套餐规格说明与客户端配置教程。',
  verificationStatus: '未确认官方自营或直接授权，定位为第三方信息展示与合作导航站',
  commercialNotice: '本站包含推广链接，通过相关链接完成订阅，本站可能获得佣金。实际价格、服务与售后以合作平台为准。',
} as const;

/**
 * 品牌核心文案与卖点系统
 * 严格遵守事实核验：不编造未经证实的用户数、节点数、延迟承诺或绝对化排名
 */
export const BRAND_SYSTEM = {
  name: BRAND_NAME,
  englishName: BRAND_NAME_EN,
  slogan: '无形连接，通达无界',
  tagline: '隐形人官网 - 专业稳定的隐形人机场专线节点导航与多端接入指南',
  targetAudience: '追求网络连接简洁稳定、重视个人数字化隐私边界、需要多端设备（Windows/macOS/iOS/Android）便捷接入与网络导航的开发者、跨国协作人员及数字游民。',
  sellingPoints: [
    {
      title: '多端配置直观指引',
      desc: '覆盖主流操作系统与通用客户端，提供图文步骤与快捷排错指引。',
    },
    {
      title: '合作通道智能测速',
      desc: '指引用户连接至合作平台的自动线路检测中心，快速匹配当前稳定通道。',
    },
    {
      title: '分流策略与隐私边界',
      desc: '提倡精细化按需分流，本地应用直连，国际流量按规则加密转发。',
    },
    {
      title: '极简纯净无冗余干扰',
      desc: '拒绝繁杂插件与弹窗阻碍，专注于清晰的导航体验与核心内容传递。',
    },
    {
      title: '社区频道实时互助',
      desc: '汇聚官方Telegram公告频道与交流群，第一时间获取动态与答疑支持。',
    },
  ],
  designTokens: {
    colors: {
      primary: '#0EA5E9',       // Cyber Cyan (隐光青蓝)
      primaryHover: '#0284C7',  // Deep Azure
      secondary: '#64748B',     // Cool Slate
      accent: '#38BDF8',        // Bright Sky
      background: '#0B0F17',    // Deep Obsidian
      surface: '#111827',       // Titanium Slate
      elevated: '#1E293B',      // Elevated Gray
      border: '#1E293B',        // Subtle Border
      borderHover: '#334155',
      textHeading: '#F8FAFC',
      textBody: '#CBD5E1',
      textMuted: '#94A3B8',
    },
    typography: {
      fontSans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans SC", "PingFang SC", sans-serif',
      fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    },
    visualMotif: '微网格矩阵与光线折射（Subtle Lattice & Refraction），象征隐匿身形与精准路由。',
  },
} as const;
