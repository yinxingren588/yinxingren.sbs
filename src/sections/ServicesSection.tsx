import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, GitFork, ShieldCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative overflow-hidden" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 左右非对称 7:5 布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 左侧 7 列：文本与服务要点 */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border">
              <span>SERVICE ARCHITECTURE</span>
            </div>

            <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight">
              透明轻量，兼顾灵活性与隐私边界的网络服务体系
            </h2>

            <p className="text-base text-brand-text-body leading-relaxed max-w-2xl">
              隐形人合作平台采用当代主流的分流路由机制与加密传输协议，致力于为数字工作者打造低侵入、高透明的网络中继环境。无需强制依赖专有全家桶软件，通过通用协议标准即可快捷集成。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-brand bg-brand-surface border border-brand-border space-y-2">
                <div className="w-8 h-8 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <GitFork className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-brand-text-heading">
                  按需分流引擎
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  通过精细化规则分流策略，本地应用自动直连，跨域协同流量按需加密转发，避免不必要的带宽损耗与延迟叠加。
                </p>
              </div>

              <div className="p-4 rounded-brand bg-brand-surface border border-brand-border space-y-2">
                <div className="w-8 h-8 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-brand-text-heading">
                  开源通用兼容
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  全面适配主流跨平台通用核心与主流工具，配置过程清晰透明，用户保有对本地网络规则与安全策略的完全掌控。
                </p>
              </div>
            </div>

            {/* 板块底部站内跳转链接（严禁使用AFF） */}
            <div className="pt-2">
              <Link
                to="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
              >
                <span>查看完整服务架构与支持协议说明</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 右侧 5 列：服务架构可视化示意卡片 */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex items-center justify-between border-b border-brand-border/80 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-text-muted">
                  ROUTING SCHEMATIC
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-primary">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  E2E ENCRYPTED
                </span>
              </div>

              {/* 架构分流层级流向 */}
              <div className="space-y-3 font-mono text-xs">
                {/* 节点 1 */}
                <div className="p-3 rounded-brand bg-brand-elevated border border-brand-border flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-brand-text-subtle">01. INBOUND</div>
                    <div className="text-brand-text-heading font-medium">终端网络应用请求</div>
                  </div>
                  <span className="text-[11px] text-brand-text-muted bg-brand-surface px-2 py-0.5 rounded border border-brand-border">
                    Multi-Device
                  </span>
                </div>

                {/* 连线箭头 */}
                <div className="flex justify-center text-brand-primary/60 py-0.5">
                  <div className="w-0.5 h-4 bg-brand-border"></div>
                </div>

                {/* 节点 2: 分流判定 */}
                <div className="p-3 rounded-brand bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-brand-primary">02. RULE ENGINE</div>
                    <div className="text-brand-text-heading font-medium">智能域名与 IP 分流规则</div>
                  </div>
                  <span className="text-[11px] text-brand-primary bg-brand-bg px-2 py-0.5 rounded border border-brand-primary/20">
                    Routing
                  </span>
                </div>

                {/* 连线分叉 */}
                <div className="grid grid-cols-2 gap-3 text-center py-0.5">
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-brand-border"></div></div>
                  <div className="flex justify-center"><div className="w-0.5 h-4 bg-brand-border"></div></div>
                </div>

                {/* 节点 3: 出口 */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-brand bg-brand-elevated/60 border border-brand-border text-center">
                    <div className="text-[10px] text-brand-text-subtle">DOMESTIC</div>
                    <div className="text-xs text-brand-text-body font-medium mt-0.5">本地直连访问</div>
                  </div>
                  <div className="p-2.5 rounded-brand bg-brand-elevated/60 border border-brand-border text-center">
                    <div className="text-[10px] text-brand-accent">TRANSIT</div>
                    <div className="text-xs text-brand-text-body font-medium mt-0.5">合作加密通道</div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-brand-text-subtle leading-normal pt-2 border-t border-brand-border/60">
                服务流程严格基于标准网络协议规范设计，不拦截非定向流量，保障网络操作的完全透明。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
