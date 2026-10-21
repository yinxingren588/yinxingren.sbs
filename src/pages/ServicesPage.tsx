import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, AIRPORT_KEYWORD, OFFICIAL_KEYWORD } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import {
  ChevronRight,
  Home,
  Layers,
  Cpu,
  GitFork,
  ShieldCheck,
  Smartphone,
  Laptop,
  ArrowRight,
  Download,
  SlidersHorizontal,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/services/'].title;
  }, []);

  const workflowSteps = [
    {
      num: '01',
      title: '评估需求与选定方案',
      desc: '结合日常办公、开发或学术检索的设备数量与流量预期，查阅套餐指引页面，选定适宜的订阅档位。',
    },
    {
      num: '02',
      title: '前往合作平台开通服务',
      desc: '通过本站安全跳转至合作平台服务中心，完成正式账户注册与套餐订阅，获取专属订阅配置密钥。',
    },
    {
      num: '03',
      title: '获取客户端并导入配置',
      desc: '在客户端下载中心获取适配您系统的开源或推荐工具，导入订阅链接后开启智能分流，即刻畅享稳健连接。',
    },
  ];

  const platforms = [
    {
      icon: Laptop,
      name: 'Windows 桌面端',
      desc: '全面支持 Windows 10 与 11（64位及 ARM 版本）。适配主流开源通用客户端，提供系统级分流代理与 TUN 虚拟网卡模式。',
      mode: '支持系统代理 · TUN 模式',
    },
    {
      icon: Laptop,
      name: 'macOS 桌面端',
      desc: '原生兼容 Apple Silicon（M系列芯片）及 Intel 架构。内存占用极低，深度支持透明代理与 macOS 原生快捷指令联动。',
      mode: 'Apple Silicon 原生优化 · 轻量低功耗',
    },
    {
      icon: Smartphone,
      name: 'Android 移动端',
      desc: '适配主流安卓手机与平板设备。支持按应用自定义分流策略，本地应用直连走国内流量，境外应用按规则中继，省电省流。',
      mode: '按应用分流 · 后台常驻保活',
    },
    {
      icon: Smartphone,
      name: 'iOS / iPadOS 移动端',
      desc: '兼容主流通用代理工具（如小火箭等通用客户端），通过订阅二维码或订阅链接一键导入策略节点，随身网络无缝连接。',
      mode: '一键导入订阅 · 按需触发连接',
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
          <span className="text-brand-text-body font-medium">服务介绍与架构</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>SERVICE ARCHITECTURE OVERVIEW</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {AIRPORT_KEYWORD}服务体系与网络分流架构概览 - {OFFICIAL_KEYWORD}
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            深入了解{BRAND_NAME}合作平台所采用的分流路由机制、主流通用传输协议与端到端安全隔离原理。我们致力于为跨域研发、海外学术与数字出海团队提供清晰、透明、低侵入的中继服务指引。
          </p>
        </div>

        {/* 板块 1: 服务概览与底层逻辑 */}
        <div className="mb-16 rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
                透明、轻量且不设冗余的当代网络服务体系
              </h2>
              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed">
                传统网络代理常因全量流量劫持导致国内应用打开迟缓，或因后台驻留流氓全家桶进程耗尽系统资源。{BRAND_NAME}合作平台推崇“按需转发、精细分流”理念：用户本地网络请求通过本地规则引擎进行毫秒级判定，属于国内公网及局域网流量保持直连，仅当目标为跨域资源时，才经过加密通道进行安全中继。
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-brand-text-subtle">
                <span className="flex items-center gap-1.5 text-brand-primary">
                  <ShieldCheck className="w-4 h-4" /> 最小权限原则
                </span>
                <span className="flex items-center gap-1.5 text-brand-accent">
                  <GitFork className="w-4 h-4" /> 规则按需分流
                </span>
                <span className="flex items-center gap-1.5 text-brand-text-body">
                  <Cpu className="w-4 h-4" /> 开源通用核心
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 bg-brand-elevated/60 border border-brand-border p-6 rounded-xl space-y-3 font-mono text-xs">
              <div className="text-brand-text-subtle uppercase text-[10px] tracking-wider border-b border-brand-border pb-2">
                Core Metrics & Policy
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brand-text-muted">路由决策层</span>
                <span className="text-brand-text-body">域名/GeoIP 规则引擎</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brand-text-muted">本地损耗</span>
                <span className="text-brand-text-body">&lt; 1% CPU 负载</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brand-text-muted">协议透明度</span>
                <span className="text-brand-text-body">开源标准协议</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-brand-text-muted">数据记录</span>
                <span className="text-brand-text-body">零网络日志留存</span>
              </div>
            </div>
          </div>
        </div>

        {/* 板块 2: 已核实的核心架构能力 */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading mb-8">
            经过验证的核心系统能力
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 shadow-card">
              <div className="w-10 h-10 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <GitFork className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                精细化规则分流策略
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                预设主流国内白名单与海外常用域名规则集，支持用户根据自身开发环境自定义规则组（如强制某些私有 npm 镜像或 Git 仓库走指定出口）。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 shadow-card">
              <div className="w-10 h-10 rounded-brand bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                多通道动态冗余调度
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                合作平台网络架构部署了多线路自动健康探测机制，客户端可设置“自动优选（UrlTest）”或“故障转移（Fallback）”，保障网络连接韧性。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 shadow-card">
              <div className="w-10 h-10 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                通用协议标准适配
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                全面遵循现代通用网络分流核心与主流传输格式，配置文件支持通用 YAML 格式导入与快捷导出，不被特定私有软件绑定。
              </p>
            </div>
          </div>
        </div>

        {/* 板块 3: 使用流程 */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border shadow-card">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading mb-8">
            标准化接入流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <div className="font-mono text-2xl font-extrabold text-brand-primary">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-brand-text-heading">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 板块 4: 多平台支持说明与选择 */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading">
                主流跨平台设备支持
              </h2>
              <p className="text-sm text-brand-text-muted mt-2">
                为不同桌面与移动环境提供适配指南，保持一致的操作习惯与分流规则。
              </p>
            </div>
            {/* 明确要求之 /downloads/ 入口 */}
            <Link
              to="/downloads/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>前往客户端下载中心</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {platforms.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3 shadow-card">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-brand-text-heading">
                        {p.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-elevated text-brand-accent border border-brand-border">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="pt-2 text-xs font-mono text-brand-text-subtle">
                    {p.mode}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 板块 5: 底部站内 CTA 引导（严禁新增 AFF） */}
        <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-card text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading">
              探索适合您业务节奏的订阅配置
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              根据您的日常终端数量与流量预期，查阅详尽的套餐选购方案与订阅考量指南。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/pricing/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-colors"
            >
              <span>查看套餐方案与选购指引</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/downloads/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
            >
              <span>获取客户端软件</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
