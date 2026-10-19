import React from 'react';
import { Link } from 'react-router-dom';
import { PlanGuide } from '../components/PlanGuide';
import { ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>OFFICIAL PLANS & PACKAGES</span>
          </div>
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            隐形人 9 大官方主力配套与规格
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            数据源自官方收银台核验凭据。包含 6 档日常与团队周期订阅方案及 3 档永不过期的一次性独立买断包。
          </p>
        </div>

        {/* 复用统一方案选择指南组件 */}
        <PlanGuide />

        {/* 底部跳转至独立 /pricing/ 深度页面 */}
        <div className="text-center pt-10">
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
          >
            <span>进入独立套餐指引页查阅更详尽的选型问答与建议</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
