import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AIRPORT_KEYWORD, OFFICIAL_KEYWORD } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import { OfficialLink } from '../components/OfficialLink';
import {
  ChevronRight,
  Home,
  Laptop,
  Smartphone,
  ArrowUpRight,
  AlertTriangle,
  FileCode,
  CheckCircle2,
} from 'lucide-react';

export const DownloadsPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/downloads/'].title;
  }, []);

  const platforms = [
    {
      id: 'windows',
      name: 'Windows 桌面端',
      icon: Laptop,
      systemReq: 'Windows 10 / 11 (64位及 ARM64 架构)',
      characteristics: [
        '支持系统级系统代理与透明网卡（TUN）模式',
        '适配主流通用开源分流核心与主流 GUI 界面',
        '支持快捷导入订阅链接并进行节点本地连通性测速',
      ],
      buttonLabel: '前往合作平台获取 Windows 适用配置',
    },
    {
      id: 'macos',
      name: 'macOS 桌面端',
      icon: Laptop,
      systemReq: 'macOS Monterey (12.0) 及以上版本',
      characteristics: [
        '原生适配 Apple Silicon (M1/M2/M3/M4) 及 Intel 架构',
        '轻量低能耗运行，对笔记本电池续航影响微弱',
        '深度集成系统级菜单栏快捷控制与自动分流策略',
      ],
      buttonLabel: '前往合作平台获取 macOS 适用配置',
    },
    {
      id: 'android',
      name: 'Android 移动端',
      icon: Smartphone,
      systemReq: 'Android 9.0 (API 28) 及更高版本',
      characteristics: [
        '支持精细化“按应用分流”，国内 App 自动保持直连',
        '系统通知栏常驻状态磁贴，快捷开启与停止中继',
        '全面适配主流手机品牌深色模式与权限省电调度',
      ],
      buttonLabel: '前往合作平台获取 Android 适用配置',
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS 移动端',
      icon: Smartphone,
      systemReq: 'iOS 15.0 / iPadOS 15.0 及更高版本',
      characteristics: [
        '通过扫码或一键导入订阅配置链接即可完成部署',
        '系统级 Network Extension 框架原生运行，连接响应迅速',
        '需配合 App Store 现成的主流通用网络工具使用',
      ],
      buttonLabel: '前往合作平台获取 iOS 适用配置',
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
          <span className="text-brand-text-body font-medium">客户端获取与安装</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>CLIENT ACQUISITION & INTEGRATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {AIRPORT_KEYWORD}客户端下载与多端配置指引 - {OFFICIAL_KEYWORD}
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            汇聚主流操作系统通用客户端获取路径与订阅导入说明。本站秉持真实透明原则，不提供来源不明的本地打包安装程序，所有适用配置资源均引导至合作平台安全校验获取。
          </p>
        </div>

        {/* 核心事实规范声明（严格避免声称专属客户端，避免虚构下载链接） */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-brand-elevated/80 border border-brand-accent/40 shadow-card space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-brand-accent/10 text-brand-accent">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-brand-text-heading">
              支持情况与获取方式说明
            </h2>
          </div>
          <p className="text-base sm:text-lg text-brand-accent font-semibold pt-1">
            “支持情况与获取方式以合作平台说明为准”
          </p>
          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed max-w-4xl">
            本站展示平台卡片仅为指导各操作系统用户了解常见支持环境与配置差异，并不代表存在品牌独家自研专属客户端软件。在没有获得合作平台明确授权的安装包直接地址前，本站坚决不伪造直接可下载文件（如 .exe 或 .apk 链接）。用户均通过下方按钮前往合作平台服务中心，核对并拉取经过官方校验的适用工具与订阅凭据。
          </p>
        </div>

        {/* 四大平台入口卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brand-text-heading">
                          {p.name}
                        </h3>
                        <div className="text-xs font-mono text-brand-text-subtle mt-0.5">
                          {p.systemReq}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 特性与支持考量 */}
                  <div className="space-y-2 pt-2 border-t border-brand-border/60">
                    <div className="text-xs font-medium text-brand-text-subtle uppercase tracking-wider">
                      环境特性与配置建议
                    </div>
                    {p.characteristics.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-brand-text-body">
                        <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 规范 CTA：使用 OfficialLink 前往合作平台获取，不得伪装为直接下载安装包 */}
                <div className="pt-6 mt-6 border-t border-brand-border/60 space-y-2">
                  <OfficialLink
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-all shadow-subtle hover:shadow-card"
                    aria-label={`前往合作平台获取 ${p.name} 适用配置`}
                  >
                    <span>{p.buttonLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </OfficialLink>
                  <p className="text-[11px] text-brand-text-subtle text-center">
                    跳转至合作平台控制台核对最新客户端版本与一键订阅配置
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部配置辅助与常见疑问 */}
        <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-card text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading flex items-center justify-center md:justify-start gap-2">
              <FileCode className="w-5 h-5 text-brand-primary" />
              <span>获取客户端后不知如何配置？</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              阅读详细的图文排错手册，学习分流模式切换、节点本地测速与网络报错处理。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/help/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-sm font-semibold transition-colors"
            >
              <span>查阅客户端配置教程</span>
            </Link>
            <Link
              to="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20 text-sm font-semibold transition-colors"
            >
              <span>加入 Telegram 交流群</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
