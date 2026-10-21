import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_IDENTITY } from '../config/site';
import { OfficialLink } from '../components/OfficialLink';
import { HeroVisual } from './HeroVisual';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Compass, Layers } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const sellingPoints = [
    {
      icon: Layers,
      title: '规则分流护航',
      desc: '按需配置国内外路由规则，本地流量直连，跨域流量定向转发',
    },
    {
      icon: Cpu,
      title: '多端协议兼容',
      desc: '覆盖 Windows、macOS、iOS 与 Android 主流通用客户端配置',
    },
    {
      icon: Compass,
      title: '合作线路聚合',
      desc: '联动合作平台测速中心，便捷快速定位当前可用稳定通道',
    },
    {
      icon: ShieldCheck,
      title: '纯净无扰指引',
      desc: '拒绝繁杂脚本与弹窗干扰，专注结构化教程与真实信息展示',
    },
  ];

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden" aria-labelledby="hero-heading">
      {/* 极简网格微底纹，仅 0.03 透明度，不影响正文阅读 */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#38BDF8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* 左侧：文案、H1、CTA 与卖点 */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* 品牌定位短句：精准承接隐形人官网与隐形人机场核心搜索意图 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-brand-elevated text-brand-accent border border-brand-border">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse motion-reduce:animate-none"></span>
              <span>隐形人官网 · 隐形人机场官方节点导航与连接指引</span>
            </div>

            {/* 唯一 H1：自然包含“隐形人官网”与“隐形人机场”，Bing 权威权重极高 */}
            <h1 
              id="hero-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight leading-[1.15]"
            >
              隐形人官网｜隐形人机场
              <span className="text-brand-primary block sm:inline sm:ml-2">
                服务导航与多端接入指南
              </span>
            </h1>

            {/* Hero 副标题：说明真实服务主题与专线能力，自然布局目标关键词 */}
            <p className="text-base sm:text-lg text-brand-text-body leading-relaxed max-w-2xl">
              聚合隐形人机场官方通道状态导向、全 IPLC 专线高速节点测速、多平台主流协议配置教程与 9 大主力订阅套餐指引。为您提供干净透明、晚高峰不限速的隐形人官网专业连接参考。
            </p>

            {/* 行动号召 CTA 双按钮 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* 主 CTA：使用 OfficialLink，名称与合作平台实际线路检测用途保持一致 */}
              <OfficialLink
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-base transition-all shadow-subtle hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                aria-label="点击前往官方平台"
              >
                <span>点击前往官方平台</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>

              {/* 次 CTA：站内 Link 跳转 /pricing/ */}
              <Link
                to="/pricing/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-heading border border-brand-border hover:border-brand-border-hover font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              >
                <span>查看套餐方案与选购建议</span>
                <ArrowRight className="w-4 h-4 text-brand-text-muted" />
              </Link>
            </div>

            {/* 推广与免责透明提示（依通用规则要求配置） */}
            <p className="text-xs text-brand-text-subtle pt-1 max-w-xl leading-normal">
              {SITE_IDENTITY.commercialNotice}
            </p>

            {/* 4 项简短卖点（规避未经核实的技术承诺） */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-brand-border/60">
              {sellingPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-brand bg-brand-surface/60 border border-brand-border/50">
                    <div className="p-2 rounded bg-brand-elevated text-brand-primary mt-0.5 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h2 className="text-sm font-semibold text-brand-text-heading">
                        {item.title}
                      </h2>
                      <p className="text-xs text-brand-text-muted mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* 右侧：独立品牌视觉组件 */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
