export interface ExperienceItem {
  id: string;
  tag: string;
  title: string;
  scenario: string;
  workflow: string;
  environment: string;
}

export const EXPERIENCES_NOTICE =
  '以下内容为典型使用场景示例，不代表可验证的实名用户评价。本站不使用假头像、假评分或假评论数量。';

export const TYPICAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-01',
    tag: '跨国开源研发',
    title: '代码依赖拉取与自动化构建',
    scenario: '日常工作中需要频繁从 GitHub 检出代码、从海外镜像源拉取 Docker 容器和 npm 依赖包。',
    workflow: '配置本地规则分流策略，本地业务与内网通讯直连，跨域代码同步按需调度，保持整体开发构建流程顺畅。',
    environment: '桌面开发工作站 · 规则分流模式',
  },
  {
    id: 'exp-02',
    tag: '国际学术科研',
    title: '学术前沿文献检索与数据获取',
    scenario: '日常需查阅 Google Scholar、arXiv 及海外高校数字图书馆的前沿学术论文与开源实验数据集。',
    workflow: '通过通用客户端配合轻量配置，顺畅检索文献摘要并下载相关 PDF 资料，保障课题研究连贯。',
    environment: '轻薄笔记本端 · 通用代理工具',
  },
  {
    id: 'exp-03',
    tag: '出海数字营销',
    title: '多平台跨境电商店铺协同管理',
    scenario: '管理海外独立站与跨境第三方店铺卖家后台，需按时跟进买家即时会话与广告投放数据。',
    workflow: '配合固定的通道切换指引，店铺后台会话管理稳定，数据监控报表刷新平稳。',
    environment: '双屏工作环境 · 专用出海网络环境',
  },
  {
    id: 'exp-04',
    tag: '云端协同设计',
    title: 'Figma 实时看板与跨时区团队交互',
    scenario: '远程产品与设计团队使用云端协作白板进行多端评审，对页面交互与高分辨率矢量元素加载有持续需求。',
    workflow: '通过低侵入的分流配置，设计资产同步平稳，实时多人光标协同与组件库更新无明显阻滞。',
    environment: 'macOS 工作环境 · 轻量通用核心',
  },
  {
    id: 'exp-05',
    tag: '移动多端调试',
    title: '移动端多设备跨屏同步接入',
    scenario: '兼顾日常出行与随时响应，需要在主力手机与便携平板设备间同步保持网络连接状态。',
    workflow: '利用订阅链接在移动端一键导入配置，按需开启按应用分流，兼顾电量消耗与网络访问便利。',
    environment: 'iOS / Android 移动端 · 按应用分流',
  },
  {
    id: 'exp-06',
    tag: '运维故障应急',
    title: '节点测速切换与社群公告协同',
    scenario: '遇到特定网络主干运营商临时抖动时，需要快速定位当前通畅的备用通道以处理线上故障。',
    workflow: '通过客户端内置测速工具快速选定低延迟节点，并结合官方 Telegram 频道维护公告了解网络动态。',
    environment: '多平台终端 · 客户端测速与社群同步',
  },
];
