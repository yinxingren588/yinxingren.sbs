/**
 * 套餐与方案选择指南统一数据源
 * 依据用户提供的官方收银台凭据完整核准上架（共 9 大官方配套）
 * 核验日期：2026-10-17
 */

export interface VerifiedPackage {
  id: string;
  tag: string;
  tagType: 'featured' | 'recommended';
  category: 'subscription' | 'onetime';
  name: string;
  subtitle: string;
  price: string;
  unit: string;
  availablePeriod: string;
  traffic: string;
  speed: string;
  devices: string;
  cycles: string[];
  details: string[];
}

export const PRICING_VERIFICATION_INFO = {
  sourceUrl: 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy',
  verificationDate: '2026-10-17',
  isVerifiedNumerically: true,
  statusNotice: '全套 9 大官方主力配套规格与价格已根据官方最新凭据完成核准上架。',
  mandatoryDisclaimer: '套餐、价格与活动以官方平台当前显示为准。',
  ctaText: '立即订阅此套餐',
} as const;

/**
 * 官方 9 大主力核验配套
 * 包含：
 * - 6 档周期订阅套餐（适合日常高频、视频、流媒体及团队高并发）
 * - 3 档一次性买断流量包（永不过期，适合商旅出差与备用安全气囊）
 */
export const VERIFIED_PACKAGES: VerifiedPackage[] = [
  // 1. 星耀风暴
  {
    id: 'star-storm',
    tag: '主推套餐',
    tagType: 'featured',
    category: 'subscription',
    name: '星耀风暴 365天不熄 ⚡',
    subtitle: '适用人群：适合小流量/新手用户，年付折算约 8 元/月。',
    price: '¥109.00',
    unit: '/年',
    availablePeriod: '年付',
    traffic: '80GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['年付'],
    details: [
      '适用人群：适合小流量/新手用户，年付折算约 8 元/月。',
      '流量政策：80GB/月高速流量（全节点 x1 倍率，晚高峰不限速）。',
      '刷新规则：购买日起算，每 30 天自动刷新流量。',
      '网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps。',
      '解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台。',
      '设备并发：不限制同时使用客户端数量，多设备自由在线。',
      '客服支持：高效客服响应，快速处理使用问题。',
      '节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10、韩国×2、阿根廷×2、马来西亚、越南、菲律宾、泰国、印度、德国、法国、英国等。',
    ],
  },
  // 2. 白银纪元
  {
    id: 'silver-era',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'subscription',
    name: '隐形人 白银纪元 👑',
    subtitle: '每月提供约 144GB 高速可用流量 (全天候极速)',
    price: '¥24.00',
    unit: '/月',
    availablePeriod: '月付 / 季付 / 半年付 / 年付',
    traffic: '144GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['月付', '季付', '半年付', '年付'],
    details: [
      '每月提供约 144GB 高速可用流量 (全天候极速)',
      '🌐 (144GB 满足深度网课用户、全高清视频会议、高强度短视频运营与流媒体长期深度用户需求)',
      '📦 云端多链路即时优化 + 全链路专线架构，秒级响应，节点统一 1x 计费倍率',
      '🎬 流媒体全家桶: Netflix / Prime Video / BBC / Abema / TVer 等全面覆盖，原生IP直通，极致体验',
      '🤖 开发之选: ChatGPT 4 / GitHub Copilot / Hugging Face 完整支持，低延迟API调用',
      '⚡ 高性能协议，多国节点可选，不限制在线设备数，商务家庭优选',
    ],
  },
  // 3. 黄金序列
  {
    id: 'gold-sequence',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'subscription',
    name: '隐形人 黄金序列 💥',
    subtitle: '每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！',
    price: '¥48.00',
    unit: '/月',
    availablePeriod: '月付 / 季付 / 半年付 / 年付',
    traffic: '360GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['月付', '季付', '半年付', '年付'],
    details: [
      '🔥 每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！',
      '🌐 BGP 三网智能优化 + 纯专线出口，稳定优先，晚高峰也绝不卡顿',
      '📦 纯专线不限速，4K 秒开、兼容 8K 超清播放，视听体验拉满',
    ],
  },
  // 4. 铂金至臻
  {
    id: 'platinum-supreme',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'subscription',
    name: '隐形人 铂金至臻 🔱',
    subtitle: '每月包含 750GB 高速可用流量，适合高频网络使用场景',
    price: '¥105.00',
    unit: '/月',
    availablePeriod: '月付 / 季付 / 半年付 / 年付',
    traffic: '750GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['月付', '季付', '半年付', '年付'],
    details: [
      '🔥 每月包含 750GB 高速可用流量，适合高频网络使用场景',
      '🌐 高频流媒体下载、远程办公、大文件传输？750GB 让你彻底告别流量焦虑。',
      '📦 BGP 多线融合调度 + 专线级网络出口，带宽充足，全节点 1x 计费',
      '🎬 全流媒体平台完美解锁，4K/8K 超清内容稳定播放，一爽到底',
    ],
  },
  // 5. 钻石穹顶
  {
    id: 'diamond-zenith',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'subscription',
    name: '隐形人 钻石穹顶 💎',
    subtitle: '每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景',
    price: '¥185.00',
    unit: '/月',
    availablePeriod: '月付 / 季付 / 半年付 / 年付',
    traffic: '1.6TB',
    speed: '不限速',
    devices: '不限',
    cycles: ['月付', '季付', '半年付', '年付'],
    details: [
      '🔥 每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景',
      '🌐 企业级 BGP 智能路由 + 专线出口方案，全程不限速，节点流量不放大',
      '📦 1.6TB 超大带宽，跨境电商、海外自媒体团队日常高强度下载必备',
      '🎬 全球主流媒体与内容平台全解锁，高码率 8K 视频多台设备同时稳定播放',
    ],
  },
  // 6. 王者定制版
  {
    id: 'king-custom',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'subscription',
    name: '王者定制版 ✈️',
    subtitle: '这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想',
    price: '¥680.00',
    unit: '/月',
    availablePeriod: '月付',
    traffic: '500GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['月付'],
    details: [
      '🔥 这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想',
      '🌐 我们为您推出顶配商业级解决方案 500GB/月 独立带宽，全程不限速，保证高并发业务丝滑顺畅',
    ],
  },
  // 7. 一次性小流量
  {
    id: 'onetime-small',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'onetime',
    name: '一次性小流量 🪐',
    subtitle: '一次性买断 160GB，无时间限制，高端纯备用梯子天花板',
    price: '¥229.00',
    unit: '/一次性',
    availablePeriod: '一次性',
    traffic: '160GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['一次性'],
    details: [
      '🔥 一次性买断 160GB，无时间限制，高端纯备用梯子天花板',
      '🌐 告别月租焦虑，¥229 拥有一个永不过期的“网络安全气囊”',
      '🎬 独立买断区专属节点，严格限 1 台设备，主打一个纯净与不挤兑',
    ],
  },
  // 8. 一次性标准流量包
  {
    id: 'onetime-standard',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'onetime',
    name: '一次性标准流量包 🌀',
    subtitle: '420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合',
    price: '¥549.00',
    unit: '/一次性',
    availablePeriod: '一次性',
    traffic: '420GB',
    speed: '不限速',
    devices: '不限',
    cycles: ['一次性'],
    details: [
      '🔥 420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合',
      '🌐 进阶优质带宽加持，支持 2 台设备同时在线，手机电脑无缝同步',
      '📦 进阶优质带宽保证晚高峰不卡顿，追剧、办公、开会全能打',
      '🎬 把预算花在刀刃上，永不过期的 420G 专线，比天天续费省心百倍',
    ],
  },
  // 9. 一次性精英流量包
  {
    id: 'onetime-elite',
    tag: '推荐选择',
    tagType: 'recommended',
    category: 'onetime',
    name: '一次性精英流量包 🌊',
    subtitle: '1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！',
    price: '¥1199.00',
    unit: '/一次性',
    availablePeriod: '一次性',
    traffic: '1.0TB',
    speed: '不限速',
    devices: '不限',
    cycles: ['一次性'],
    details: [
      '🔥 1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！',
      '🌐 极速旗舰级最高优先级带宽，支持 3 台设备同时狂飙，稳如泰山',
      '📦 专为高净值金融、跨境核心业务、高端工作室打造的商务断区',
      '🎬 1TB 大容量且没有时间限制，重度生产力用户的终心省心方案',
    ],
  },
];

export interface SelectionDimension {
  id: string;
  category: string;
  title: string;
  description: string;
  considerations: string[];
  recommendation: string;
}

export const PLAN_SELECTION_DIMENSIONS: SelectionDimension[] = [
  {
    id: 'usage',
    category: '使用场景',
    title: '业务类型与访问频率',
    description: '根据日常网络访问的依赖程度选择适宜的通道优先级。',
    considerations: [
      '轻量级查阅：日常查阅外文技术资料、学术文献与基础社交信息（推荐星耀风暴或白银纪元）',
      '中度研发级：GitHub 代码同步、Docker Hub 镜像拉取与云端依赖包构建（推荐黄金序列）',
      '重度跨国协同：跨国高频视频会议、全天候远程桌面与团队多端并发（推荐铂金至臻或钻石穹顶）',
      '独立顶级商业：跨境企业生命线、核心业务高并发（推荐王者定制版 500GB/月独立带宽）',
      '备用商旅出差：不想按月续费、需要永久有效的网络安全气囊（推荐一次性小流量/标准包/精英包）',
    ],
    recommendation: '建议从契合当前业务规模的档位入手，按需平滑升级。',
  },
  {
    id: 'devices',
    category: '设备数量',
    title: '多终端并发支持',
    description: '评估日常需要同时保持在线的移动端与桌面设备总数。',
    considerations: [
      '周期订阅套餐：全线不限制同时在线客户端数量，多设备自由畅连',
      '一次性小流量（160GB）：独立买断区专属节点，严格限 1 台设备，主打纯净与不挤兑',
      '一次性标准包（420GB）：支持 2 台设备同时在线，手机电脑无缝同步',
      '一次性精英包（1TB）：支持 3 台设备同时狂飙，高端工作室商务专享',
    ],
    recommendation: '周期订阅适合全家与多设备并发；一次性包依据设备数量选择对应档位。',
  },
  {
    id: 'traffic',
    category: '流量规划',
    title: '月度数据流量配额',
    description: '根据数据吞吐量预估每月周期或买断总量的合理区间。',
    considerations: [
      '80GB/月（星耀风暴）：日常查阅、社交通信、新手入门首选',
      '144GB/月（白银纪元）：全高清会议、网课与流媒体深度体验',
      '360GB/月（黄金序列）：4K/8K 视频与流媒体常驻，主力首选',
      '750GB—1.6TB（铂金/钻石）：大文件传输、跨境电商与多人团队无忧大流量',
      '160GB—1TB 一次性买断：永不过期，适合商旅出差与日常备用',
    ],
    recommendation: '周期订阅每月自动刷新流量，一次性买断包无时间限制永不过期。',
  },
  {
    id: 'cycle',
    category: '计费周期',
    title: '订阅周期与灵活性',
    description: '平衡单期灵活性与长期买断的综合持有成本。',
    considerations: [
      '月度订阅：灵活性最高，支持随时调整或暂停',
      '季度/半年：适合稳定开展的周期性项目，兼顾灵活性与优惠',
      '年度订阅：星耀风暴年付仅 ¥109.00（折算仅约 8 元/月），长期使用费率极具优势',
      '一次性买断：一口价无月租焦虑，永不过期，用多少扣多少',
    ],
    recommendation: '初次使用可按需选择月付或年付，所有款项交付与售后均由官方平台承接。',
  },
];
