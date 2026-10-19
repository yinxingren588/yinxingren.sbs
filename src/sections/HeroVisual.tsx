import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN } from '../config/site';

/**
 * HeroVisual 组件
 * 品牌专属右侧视觉系统：
 * - 重点呈现隐形人官方品牌形象 (Logo Mascot)
 * - 适配暗色科技主题的高级微光卡片容器
 */
export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none select-none">
      {/* 柔和隐青环境光晕 */}
      <div 
        className="absolute -inset-2 bg-gradient-to-tr from-sky-500/25 via-sky-600/15 to-cyan-400/20 rounded-3xl blur-2xl opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* 品牌形象展示外卡 */}
      <div className="relative rounded-2xl bg-brand-surface/90 border border-brand-border p-6 sm:p-8 shadow-card overflow-hidden">
        {/* 背景微网格 */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        {/* 顶部排版标头 */}
        <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-brand-border/80 text-[11px] font-mono text-brand-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
            <span className="tracking-widest uppercase">
              {BRAND_NAME_EN} // BRAND IDENTITY
            </span>
          </div>
          <span className="text-brand-text-subtle font-mono uppercase">OFFICIAL LOGO</span>
        </div>

        {/* 核心 Logo 形象展示区 */}
        <div className="relative z-10 flex items-center justify-center py-2 sm:py-4">
          <div className="relative group flex items-center justify-center">
            {/* 徽标背部柔和光环 */}
            <div
              className="absolute -inset-3 bg-brand-primary/15 rounded-3xl blur-xl transition-all duration-500 group-hover:bg-brand-primary/25"
              aria-hidden="true"
            />
            {/* 徽标画板容器 */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-white p-4 sm:p-6 shadow-xl border border-brand-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src="/logo.png"
                alt={`${BRAND_NAME} 品牌形象`}
                className="w-full h-full object-contain"
                width={512}
                height={512}
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* 底部信息标注卡片 */}
        <div className="relative z-10 pt-5 mt-4 border-t border-brand-border/80">
          <div className="grid grid-cols-2 gap-3 text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-brand-bg/60 border border-brand-border">
              <div className="text-brand-text-subtle text-[10px] uppercase">Brand Identity</div>
              <div className="text-brand-primary font-medium truncate mt-0.5">
                {BRAND_NAME} ({BRAND_NAME_EN})
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-brand-bg/60 border border-brand-border">
              <div className="text-brand-text-subtle text-[10px] uppercase">Visual Asset</div>
              <div className="text-brand-text-body font-medium truncate mt-0.5">
                Official Mascot & Logo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
