import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Network, Activity, RefreshCw } from 'lucide-react';

export const LocationsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="locations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>NETWORK REGIONS & SCOPE</span>
          </div>
          <h2 id="locations-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            隐形人机场全球节点与专线线路分布说明
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            隐形人官网整理隐形人机场在亚太、美洲与欧洲的核心专线节点分布与通道特点，支持一键导入订阅与本地实时测速。
          </p>
        </div>

        {/* 核心规格与事实声明容器 */}
        <div className="max-w-4xl mx-auto">
          
          {/* 统一规范提示框（严格遵循核验规则） */}
          <div className="p-5 sm:p-6 rounded-2xl bg-brand-elevated/80 border border-brand-accent/30 mb-8 flex items-start gap-4 shadow-subtle">
            <div className="p-2 rounded bg-brand-accent/10 text-brand-accent shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <div className="text-sm font-semibold text-brand-text-heading">
                官方真实性与实时性说明
              </div>
              <p className="text-sm text-brand-text-body font-medium leading-relaxed">
                “具体线路、节点与可用服务以合作平台客户端实际显示为准。”
              </p>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                本站为第三方信息展示与使用指南站，不存储任何服务器节点，不承诺未经证实的节点数量、延迟数据或保证解锁能力。
              </p>
            </div>
          </div>

          {/* 3 维度技术机制说明卡片（替代世界地图与伪造指标） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-xl bg-brand-surface border border-brand-border p-6 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-text-heading">
                多通道动态维护
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                合作平台根据主干网络负载与通道健康状态进行持续巡检与动态调优，确保线路服务可用性。
              </p>
            </div>

            <div className="rounded-xl bg-brand-surface border border-brand-border p-6 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-text-heading">
                本地实时自动测速
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                客户端内置本地真连接 Ping 与下载测速功能，指引用户在当前网络环境下智能选择优选节点。
              </p>
            </div>

            <div className="rounded-xl bg-brand-surface border border-brand-border p-6 shadow-card space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-brand-text-heading">
                订阅在线同步
              </h3>
              <p className="text-xs text-brand-text-muted leading-relaxed">
                节点地址与接入密钥通过安全订阅通道在线同步更新，无需手动逐一调整节点配置参数。
              </p>
            </div>

          </div>

          {/* 底部站内跳转（严禁使用AFF） */}
          <div className="text-center pt-10">
            <Link
              to="/locations/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
            >
              <span>了解节点接入机制与测速建议</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
