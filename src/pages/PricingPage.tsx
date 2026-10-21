import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlanGuide } from '../components/PlanGuide';
import { BRAND_NAME, AIRPORT_KEYWORD, OFFICIAL_KEYWORD } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import { ChevronRight, Home, HelpCircle } from 'lucide-react';

export const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/pricing/'].title;
  }, []);

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
          <span className="text-brand-text-body font-medium">套餐方案与选购指引</span>
        </nav>

        {/* 独立 H1 与简介（重点回答套餐选择搜索需求，不复制整段首页介绍） */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>PRICING & SUBSCRIPTION GUIDE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {AIRPORT_KEYWORD}套餐价格与9大规格方案说明 - {OFFICIAL_KEYWORD}
          </h1>

          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            本指南专为评估{BRAND_NAME}订阅方案的用户提供客观参考。公布官方 9 大主力配套详细规格、月度流量配额与价格（包含 6 档周期订阅及 3 档买断包），并从使用频率、多设备并发、数据吞吐和付费周期四个维度梳理选型要点，帮助您在订阅前明确自身需求。
          </p>
        </div>

        {/* 复用统一方案选择指南组件（含四大维度与唯一主要 AFF 按钮） */}
        <PlanGuide />

        {/* 套餐选购深度补充知识与注意事项 */}
        <div className="mt-16 pt-12 border-t border-brand-border/70">
          <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading mb-6 flex items-center gap-2.5">
            <HelpCircle className="w-6 h-6 text-brand-primary" />
            <span>订阅选购常见注意事项</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-text-heading">
                1. 优先以短期验证稳定性
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                各地区本地宽带与网络运营商环境存在客观差异，建议首次订阅可优先考虑月度周期，验证本地客户端与主力应用的匹配度。
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-text-heading">
                2. 明确设备并发限制
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                不同规格方案通常对“同时活跃在线设备数”有明确上限要求，多人或多终端同时使用时请务必核对合作平台当期的限制说明。
              </p>
            </div>

            <div className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2">
              <h3 className="font-semibold text-brand-text-heading">
                3. 交易与售后保障
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                所有订阅交付、账户充值、退订申请与工单技术支持均由合作平台官方团队直接提供，本站不接触任何资金流。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
