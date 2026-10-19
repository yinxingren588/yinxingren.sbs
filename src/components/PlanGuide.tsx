import React, { useState } from 'react';
import { OfficialLink } from './OfficialLink';
import {
  VERIFIED_PACKAGES,
  PLAN_SELECTION_DIMENSIONS,
  PRICING_VERIFICATION_INFO,
} from '../data/pricingData';
import type { VerifiedPackage } from '../data/pricingData';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap,
  Smartphone,
  Coins,
  Layers,
  ShieldCheck,
} from 'lucide-react';

export const PlanGuide: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('star-storm');
  const [filterCategory, setFilterCategory] = useState<'all' | 'subscription' | 'onetime'>('all');

  const filteredPackages = VERIFIED_PACKAGES.filter((pkg) => {
    if (filterCategory === 'all') return true;
    return pkg.category === filterCategory;
  });

  const activePackage: VerifiedPackage =
    VERIFIED_PACKAGES.find((pkg) => pkg.id === selectedId) || VERIFIED_PACKAGES[0];

  const subscriptionCount = VERIFIED_PACKAGES.filter((p) => p.category === 'subscription').length;
  const onetimeCount = VERIFIED_PACKAGES.filter((p) => p.category === 'onetime').length;

  return (
    <div className="w-full space-y-12">
      
      {/* 官方统一核验与价格声明提示条 */}
      <div className="p-5 sm:p-6 rounded-2xl bg-brand-surface border border-brand-primary/30 flex items-start gap-4 shadow-subtle">
        <div className="p-2 rounded-brand bg-brand-primary/10 text-brand-primary shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 text-left">
          <div className="text-sm font-semibold text-brand-text-heading flex flex-wrap items-center gap-2">
            <span>官方套餐核验与规格公示（共 9 大配套）</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-elevated text-brand-text-muted border border-brand-border">
              核验日期: {PRICING_VERIFICATION_INFO.verificationDate}
            </span>
          </div>
          <p className="text-sm text-brand-accent font-medium">
            “{PRICING_VERIFICATION_INFO.statusNotice}”
          </p>
          <p className="text-xs text-brand-text-muted leading-relaxed max-w-3xl">
            涵盖 6 档日常与团队周期订阅方案（全 IPLC/专线、晚高峰不限速、原生 IP 解锁主流流媒体与 AI）及 3 档永不过期的一次性独立买断流量包。所有款项结算均由官方收银台直接承接。
          </p>
        </div>
      </div>

      {/* 1. 分类筛选与 9 套餐交互切换标签栏 (Tabs) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-brand-text-heading">
            <Layers className="w-4 h-4 text-brand-primary" />
            <span>9 大官方主力配套切换详情</span>
          </div>

          {/* 分类快捷筛选过滤器 */}
          <div className="inline-flex items-center p-1 rounded-xl bg-brand-surface border border-brand-border text-xs">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterCategory === 'all'
                  ? 'bg-brand-primary text-brand-bg shadow-sm font-bold'
                  : 'text-brand-text-muted hover:text-brand-text-heading'
              }`}
            >
              全部配套 ({VERIFIED_PACKAGES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('subscription')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterCategory === 'subscription'
                  ? 'bg-brand-primary text-brand-bg shadow-sm font-bold'
                  : 'text-brand-text-muted hover:text-brand-text-heading'
              }`}
            >
              周期订阅 ({subscriptionCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('onetime')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                filterCategory === 'onetime'
                  ? 'bg-brand-primary text-brand-bg shadow-sm font-bold'
                  : 'text-brand-text-muted hover:text-brand-text-heading'
              }`}
            >
              一次性买断 ({onetimeCount})
            </button>
          </div>
        </div>

        {/* 顶部横向滚动 Tab 切换器 */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
          {filteredPackages.map((pkg) => {
            const isSelected = pkg.id === activePackage.id;
            return (
              <button
                key={pkg.id}
                type="button"
                onClick={() => setSelectedId(pkg.id)}
                className={`shrink-0 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 border focus:outline-none focus:ring-2 focus:ring-brand-primary/50 ${
                  isSelected
                    ? 'bg-brand-primary text-brand-bg border-brand-primary shadow-card'
                    : 'bg-brand-surface text-brand-text-body hover:text-brand-text-heading border-brand-border hover:border-brand-primary/40'
                }`}
              >
                <span>{pkg.name.split(' ')[0]}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                    isSelected
                      ? 'bg-brand-bg/20 text-brand-bg font-bold'
                      : 'bg-brand-elevated text-brand-text-muted'
                  }`}
                >
                  {pkg.price}{pkg.unit}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2. 双栏详情特色大卡片（完全还原收银台凭据样式与布局） */}
        <div className="rounded-3xl bg-brand-surface border border-brand-border p-6 sm:p-8 lg:p-10 shadow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* 左侧：价格与核心规格参数面板 (7 列) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
              <div className="space-y-5">
                
                {/* 顶栏：标签与金币/数据库图标 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
                        activePackage.tagType === 'featured'
                          ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/40'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                      <span>{activePackage.tag}</span>
                    </span>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-brand-elevated border border-brand-border text-brand-text-muted">
                      {activePackage.category === 'subscription' ? '周期订阅方案' : '一次性买断包'}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center text-brand-primary shrink-0 shadow-inner">
                    <Coins className="w-5 h-5" />
                  </div>
                </div>

                {/* 标题与适用人群说明 */}
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-text-heading flex items-center gap-2">
                    {activePackage.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    {activePackage.subtitle}
                  </p>
                </div>

                {/* CURRENT OFFER 与 AVAILABLE 价格面板 */}
                <div className="p-5 rounded-2xl bg-brand-elevated/70 border border-brand-border flex items-center justify-between shadow-inner">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono tracking-wider text-brand-text-subtle uppercase">
                      CURRENT OFFER
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading font-mono flex items-baseline gap-1">
                      <span className="text-brand-primary">{activePackage.price}</span>
                      <span className="text-xs font-normal text-brand-text-muted font-sans">
                        {activePackage.unit}
                      </span>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <div className="text-[10px] font-mono tracking-wider text-brand-text-subtle uppercase">
                      AVAILABLE
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-brand-accent">
                      {activePackage.availablePeriod}
                    </div>
                  </div>
                </div>

                {/* 3 项速览规格卡：月流量/买断流量 / 速率 / 设备数 */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-brand-elevated/80 border border-brand-border text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-brand-text-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{activePackage.category === 'subscription' ? '月流量' : '买断流量'}</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-brand-text-heading font-mono">
                      {activePackage.traffic}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-elevated/80 border border-brand-border text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-brand-text-muted">
                      <Zap className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>速率</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-brand-text-heading">
                      {activePackage.speed}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-elevated/80 border border-brand-border text-left space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-brand-text-muted">
                      <Smartphone className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>设备数</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-brand-text-heading">
                      {activePackage.devices}
                    </div>
                  </div>
                </div>

                {/* 付费周期标签 Pills */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-xs text-brand-text-subtle">支持周期：</span>
                  {activePackage.cycles.map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-brand-elevated border border-brand-border text-brand-text-body"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* 核心行动 CTA 按钮 */}
              <div className="pt-2">
                <OfficialLink
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-brand text-base font-bold bg-brand-primary hover:bg-brand-primary-hover text-brand-bg transition-all shadow-subtle hover:shadow-card focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  aria-label={`立即订阅 ${activePackage.name}`}
                >
                  <span>立即订阅此套餐</span>
                  <ArrowRight className="w-4 h-4" />
                </OfficialLink>
              </div>
            </div>

            {/* 右侧：套餐详情清单 (5 列) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-brand-elevated/60 border border-brand-border flex flex-col justify-start space-y-4 text-left">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-text-heading pb-3 border-b border-brand-border">
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                <span>套餐详情与权益</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-brand-text-body leading-relaxed overflow-y-auto max-h-[420px] pr-1">
                {activePackage.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* 3. 九大配套全景卡片矩阵 (9-Card 3x3 Grid Overview) */}
      <div className="space-y-6 pt-4 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-base font-bold text-brand-text-heading">
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span>全套 9 档官方主力规格一览</span>
          </div>
          <span className="text-xs text-brand-text-subtle">
            包含 6 档日常与团队周期订阅 + 3 档永不过期买断包
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_PACKAGES.map((pkg) => {
            const isSelected = pkg.id === activePackage.id;
            return (
              <div
                key={pkg.id}
                className={`p-6 rounded-2xl flex flex-col justify-between transition-all border shadow-card ${
                  isSelected
                    ? 'bg-brand-surface border-brand-primary ring-1 ring-brand-primary/40'
                    : 'bg-brand-surface border-brand-border hover:border-brand-primary/40'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                          pkg.tagType === 'featured'
                            ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/40'
                            : 'bg-brand-elevated text-brand-text-muted border border-brand-border'
                        }`}
                      >
                        {pkg.tag}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-elevated text-brand-text-subtle">
                        {pkg.category === 'subscription' ? '周期' : '买断'}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-brand-primary font-bold">
                      {pkg.traffic} {pkg.category === 'subscription' ? '/ 月' : '买断'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-brand-text-heading truncate">
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-brand-text-muted line-clamp-2 mt-1">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* 价格栏 */}
                  <div className="pt-2 border-t border-brand-border flex items-baseline justify-between">
                    <div className="text-2xl font-black text-brand-text-heading font-mono">
                      <span className="text-brand-primary">{pkg.price}</span>
                      <span className="text-xs text-brand-text-muted font-sans font-normal ml-1">
                        {pkg.unit}
                      </span>
                    </div>
                    <span className="text-[11px] text-brand-accent font-medium">
                      {pkg.availablePeriod}
                    </span>
                  </div>

                  {/* 核心权益简要提炼 */}
                  <div className="space-y-1.5 pt-2 text-xs text-brand-text-muted border-t border-brand-border/60">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>{pkg.category === 'subscription' ? '全 IPLC / 专线 · 晚高峰不限速' : '永不过期 · 纯净备用保障'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>原生 IP · 流媒体与 ChatGPT 全解锁</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                      <span>设备并发：{pkg.devices}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  <OfficialLink
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-brand text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-brand-bg transition-colors"
                    aria-label={`立即订阅 ${pkg.name}`}
                  >
                    <span>立即订阅此套餐</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </OfficialLink>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedId(pkg.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="w-full py-1.5 text-center text-[11px] text-brand-text-subtle hover:text-brand-primary transition-colors"
                  >
                    查看上方详细参数与权益详情 ↑
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. 四大选型决策维度卡片 */}
      <div className="space-y-6 pt-6 text-left">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-brand-text-heading">
            理性选型维度与决策建议
          </h3>
          <p className="text-xs text-brand-text-muted">
            如果不确定选择哪个档位，可对照以下四个维度评估最匹配您当前需求的方案：
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLAN_SELECTION_DIMENSIONS.map((dim) => (
            <div
              key={dim.id}
              className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-7 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border">
                    {dim.category}
                  </span>
                  <span className="text-xs font-mono text-brand-text-subtle">
                    DIMENSION
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-brand-text-heading mb-1">
                    {dim.title}
                  </h4>
                  <p className="text-xs text-brand-text-muted">
                    {dim.description}
                  </p>
                </div>

                {/* 核心考量清单 */}
                <div className="space-y-2 pt-2 border-t border-brand-border/60">
                  {dim.considerations.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-brand-text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 决策建议小结 */}
              <div className="mt-5 pt-3 border-t border-brand-border/50 text-xs font-mono text-brand-text-subtle flex items-start gap-2 bg-brand-elevated/40 p-3 rounded-brand">
                <Sparkles className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                <span>{dim.recommendation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部统一商业合规提示 */}
      <div className="p-4 rounded-xl bg-brand-surface border border-brand-border/70 text-center text-xs text-brand-text-subtle">
        本站包含推广链接，通过相关链接完成订阅，本站可能获得佣金。实际价格、服务与售后以官方平台当前显示为准。
      </div>

    </div>
  );
};
