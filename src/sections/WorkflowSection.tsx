import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ExternalLink, Sliders } from 'lucide-react';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '了解并选择方案',
      desc: '在本站查阅套餐选购说明与多终端支持清单，评估日常设备数量与带宽流量需求，确定适宜的周期计划。',
      subtext: '站内客观指引，无强制捆绑',
    },
    {
      num: '02',
      icon: ExternalLink,
      title: '前往合作平台完成订阅',
      desc: '通过本站安全跳转至合作平台服务中心，直接完成账户开通与方案订阅。（所有交易结算与售后均由合作平台独立承办）',
      subtext: '合作平台直付，安全透明',
    },
    {
      num: '03',
      icon: Sliders,
      title: '获取客户端并按照指引使用',
      desc: '下载适配您系统（Windows/macOS/移动端）的客户端工具，将订阅链接导入配置，开启智能分流即可连接。',
      subtext: '详尽图文教程，快速上手',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="workflow-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>ONBOARDING WORKFLOW</span>
          </div>
          <h2 id="workflow-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            清晰三步，快速开启跨域网络接入
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            如实呈现标准化流程：本站专注于信息整合与使用教程，正式订阅与网络通道由合作平台独立交付。
          </p>
        </div>

        {/* 3 步水平连线阶梯结构 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* 桌面端连接虚线 */}
          <div 
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t border-dashed border-brand-border/80 z-0"
            aria-hidden="true"
          />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-card relative z-10 hover:border-brand-primary/40 transition-colors"
              >
                <div>
                  {/* 步骤标号与图标 */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-brand-primary/40 group-hover:text-brand-primary transition-colors">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center border border-brand-border">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-brand-text-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 text-xs font-mono text-brand-text-subtle">
                  {item.subtext}
                </div>
              </div>
            );
          })}

        </div>

        {/* 板块底部站内跳转 */}
        <div className="text-center pt-12">
          <Link
            to="/help/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
          >
            <span>查阅全平台图文配置教程与排错指南</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
