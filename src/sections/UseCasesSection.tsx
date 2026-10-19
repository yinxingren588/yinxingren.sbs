import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, GraduationCap, Globe2, Briefcase } from 'lucide-react';

export const UseCasesSection: React.FC = () => {
  const cases = [
    {
      icon: Code2,
      category: 'DEVELOPMENT',
      title: '软件工程与开源研发',
      desc: '稳定拉取 GitHub 仓库、获取 Docker Hub 镜像与 npm/crates 依赖，快速查阅海外官方技术规范与开发者文档，保障代码构建与 CI 流程不受网络颠簸干扰。',
      tags: ['GitHub', 'Docker Hub', 'API Docs', 'CI/CD'],
    },
    {
      icon: GraduationCap,
      category: 'ACADEMIC',
      title: '国际学术科研与文献查阅',
      desc: '顺畅访问 Google Scholar、arXiv、IEEE Xplore 与国际高校学术期刊平台，稳定下载前沿研究论文与数据集，为学术检索与论文撰写提供可靠通路。',
      tags: ['Google Scholar', 'arXiv', 'IEEE', 'Open Course'],
    },
    {
      icon: Globe2,
      category: 'COMMERCE',
      title: '跨境电商与出海数字营销',
      desc: '高效登录并管理海外电商卖家中心、海外社交媒体运营工具与全球广告监测面板，实时跟进出海买家沟通与多平台订单状态。',
      tags: ['E-Commerce', 'Global Ads', 'Social Media', 'Analytics'],
    },
    {
      icon: Briefcase,
      category: 'REMOTE WORK',
      title: '数字游民与跨国协同办公',
      desc: '深度支持 Figma 云端设计协同、海外项目管理看板与跨时区团队即时通信，随时随地在轻量设备上展开高效远程工作。',
      tags: ['Figma', 'Team Chat', 'Cloud Storage', 'Remote Sync'],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="usecases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>USE CASES</span>
          </div>
          <h2 id="usecases-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            面向多元数字生产力的高效应用场景
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            为现代远程开发者、科研人员及出海数字团队提供针对性网络支持，满足多样化业务诉求。
          </p>
        </div>

        {/* 2x2 交错功能卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">
                      {item.category}
                    </span>
                    <div className="w-9 h-9 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-text-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-brand-text-muted leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/60 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded bg-brand-elevated text-brand-text-body text-xs font-mono border border-brand-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 板块底部站内跳转 */}
        <div className="pt-10">
          <Link
            to="/downloads/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
          >
            <span>获取支持多场景适配的客户端下载与安装教程</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
