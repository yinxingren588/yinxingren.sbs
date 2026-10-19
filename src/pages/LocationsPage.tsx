import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../config/site';
import {
  ChevronRight,
  Home,
  AlertTriangle,
  Compass,
  Activity,
  RefreshCw,
  ArrowRight,
  Globe,
} from 'lucide-react';

export const LocationsPage: React.FC = () => {
  useEffect(() => {
    document.title = '节点网络与线路测速 - 隐形人';
  }, []);

  const selectionDimensions = [
    {
      title: '近邻枢纽考量（低延迟交互需求）',
      purpose: '网页快速浏览 · 实时交互终端 · 跨国协作通讯',
      factors: [
        '物理距离考量：距中国大陆地理距离较近的周边网络枢纽，通常在交互响应时间（RTT）上具有天然物理优势。',
        '适用业务：日常频繁打开各类海外网页、查阅实时文档、Slack/Discord 即时沟通与终端命令行操作。',
        '选线提醒：该类区域通常用户集中度较高，在晚间骨干公网高峰期建议在客户端内测速择优切换。',
      ],
    },
    {
      title: '美洲资源枢纽考量（大吞吐与开源生态）',
      purpose: '代码仓库同步 · 镜像源拉取 · 论文大文件下载',
      factors: [
        '网络带宽考量：美洲核心节点拥有全球极其充沛的骨干网出口带宽与技术生态直连能力。',
        '适用业务：拉取大型 GitHub 代码仓库、Docker Hub 容器镜像同步、Google Scholar 批量下载文献 PDF。',
        '选线提醒：由于物理距离较远，RTT 延迟天然高于周边近邻，但带宽承载力通常更为宽裕。',
      ],
    },
    {
      title: '欧洲通道考量（区域专属性与合规检索）',
      purpose: '欧洲电商卖家后台 · 学术开放数据库 · 区域合规业务',
      factors: [
        '特定业务考量：满足面向欧洲本土电商管理系统、GDPR 规则下的科研数据中心或特定海外高校内网访问。',
        '适用业务：跨境多平台店铺运营、欧洲学术期刊与开放文献检索、区域限定业务处理。',
        '选线提醒：请结合实际业务目标服务器所在地进行选择，避免跨洲多次中继带来不必要的中转跳数。',
      ],
    },
  ];

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 面包屑导航 */}
        <nav className="flex items-center gap-2 text-xs font-mono text-brand-text-subtle mb-8" aria-label="面包屑导航">
          <Link to="/" className="hover:text-brand-primary flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>首页</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-text-body font-medium">节点网络与通道指南</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>NETWORK ROUTING & LOCATIONS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {BRAND_NAME}节点网络与通道选择指南
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            深入了解网络通道调度机制、本地测速选线技巧与区域考量维度。我们不编造不可核实的节点数量与延迟数字，如实呈现客观选线方法。
          </p>
        </div>

        {/* 强制要求之明确范围说明与事实警示框 */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-brand-elevated/80 border border-brand-accent/40 shadow-card space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-brand-accent/10 text-brand-accent">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-brand-text-heading">
              节点覆盖与实时状态声明
            </h2>
          </div>
          <p className="text-base sm:text-lg text-brand-accent font-semibold pt-1">
            “具体线路与节点以客户端实际显示为准”
          </p>
          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-4xl">
            本站为“{BRAND_NAME}”第三方信息展示与使用指引站，不自建、不持有、不运营任何网络服务器节点。所有实际线路资源、通道类型与在线可用性完全由合作平台服务端进行动态维护与即时调度。本站不捏造任何节点总数、延迟均值或覆盖国家清单，下方涉及的地区考量仅作为用户在客户端配置选线时的参考依据。
          </p>
        </div>

        {/* 板块 1: 地区选择考量参考（非承诺已有线路） */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading">
              通道选择与区域考量维度
            </h2>
            <p className="text-sm text-brand-text-muted mt-2">
              客户端内的节点如何按需选择？以下整理了常见网络接入场景下的决策参考依据。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {selectionDimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-card flex flex-col justify-between hover:border-brand-primary/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-elevated text-brand-primary border border-brand-border">
                      DIMENSION 0{idx + 1}
                    </span>
                    <Globe className="w-4 h-4 text-brand-text-subtle" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-text-heading mb-1.5">
                      {dim.title}
                    </h3>
                    <div className="text-xs font-mono text-brand-accent bg-brand-elevated/40 px-2.5 py-1 rounded border border-brand-border/60">
                      {dim.purpose}
                    </div>
                  </div>
                  <ul className="space-y-3 pt-2 border-t border-brand-border/60 text-xs text-brand-text-muted leading-relaxed">
                    {dim.factors.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-1.5"></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 板块 2: 本地真实测速与排错指南 */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border shadow-card space-y-6">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-brand-primary" />
            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
              如何进行本地真连接测速与科学选线？
            </h2>
          </div>

          <p className="text-sm text-brand-text-muted leading-relaxed max-w-3xl">
            很多用户容易将“ICMP Ping”当作衡量线路好坏的唯一标准。实际上，网络代理属于应用层/传输层加密中继，传统 Ping 仅代表握手探针，无法反映真实握手成功率与并发吞吐表现。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-brand-elevated/50 border border-brand-border space-y-2">
              <h3 className="text-base font-semibold text-brand-text-heading flex items-center gap-2">
                <Compass className="w-4 h-4 text-brand-primary" />
                1. 优先使用 UrlTest 真实握手测速
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                在主流客户端中，推荐点击“测速（UrlTest）”按钮。它会向预设的测试地址（如 Google 或 Cloudflare 探针）发起真实的 TLS 握手请求，所显示的毫秒数才能真实反映当前端到端可用性。
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-elevated/50 border border-brand-border space-y-2">
              <h3 className="text-base font-semibold text-brand-text-heading flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-brand-accent" />
                2. 定期在客户端更新订阅节点
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                合作平台会根据主干网状态动态替换故障 IP 或增添新扩容出口。若遇到全列表超时，请先在客户端右键或下拉执行“更新订阅（Update Subscription）”，拉取最新解析节点。
              </p>
            </div>
          </div>
        </div>

        {/* 板块 3: 底部站内 CTA 引导（严禁新增 AFF） */}
        <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-card text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading">
              需要更深入的客户端测速与排错图文指引？
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              访问我们的帮助中心查阅各平台常见故障排查步骤，或前往套餐页面了解规格考量。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/help/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-colors"
            >
              <span>查阅帮助与排错教程</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
            >
              <span>查看方案选型考量</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
