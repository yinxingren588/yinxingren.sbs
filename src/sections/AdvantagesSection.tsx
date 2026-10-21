import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, MonitorSmartphone, Feather, Users } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="advantages-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>CORE ADVANTAGES</span>
          </div>
          <h2 id="advantages-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            选择隐形人机场的核心优势：高速稳定与全IPLC专线保障
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            通过隐形人官网深入了解隐形人机场在全 IPLC 专线中继、晚高峰不限速、原生 IP 流媒体解锁及端到端隐私隔离上的扎实优势。
          </p>
        </div>

        {/* Bento 栅格布局 (1 跨双列主卡 + 3 标准卡) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 主卡片（跨 2 列） */}
          <div className="md:col-span-2 rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-card relative overflow-hidden group hover:border-brand-primary/40 transition-colors">
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
                端到端流量隔离与明确的隐私边界
              </h3>
              <p className="text-sm sm:text-base text-brand-text-muted leading-relaxed max-w-2xl">
                跨域访问全程采用现代高强度加密通道，本地数据在离开设备前即完成安全封装。本站作为第三方信息与导航站，绝不留存或探测用户的访问记录、订阅密钥或个人账户详情，让网络操作重归纯粹。
              </p>
            </div>
            
            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center gap-4 text-xs font-mono text-brand-text-subtle relative z-10">
              <span>ZERO TRACKING</span>
              <span>•</span>
              <span>STRICT ISOLATION</span>
              <span>•</span>
              <span>COMMUNITY AUDITED</span>
            </div>
          </div>

          {/* 标准卡 1: 全平台多设备一致体验 */}
          <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center">
                <MonitorSmartphone className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                全端覆盖与通用规范
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                提供覆盖 Windows、macOS、iOS 与 Android 的规范化配置指引，支持通用订阅格式导入，切换设备平滑无痛。
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-brand-text-subtle">
              Windows / macOS / iOS / Android
            </div>
          </div>

          {/* 标准卡 2: 轻量纯净无后台冗余 */}
          <div className="rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                轻量纯净无后台捆绑
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                拒绝强制绑定的流氓自启守护进程与弹窗插件，最大化节省本地计算资源与便携设备续航。
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-brand-text-subtle">
              No Bloatware · Minimal Overhead
            </div>
          </div>

          {/* 标准卡 3: 社区联动与透明公告 */}
          <div className="md:col-span-2 lg:col-span-2 rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-text-heading">
                社群互助与透明公告发布
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                整合 Telegram 官方资讯频道与用户交流群，节点维护计划、网络状态波动及版本演进公开透明，互助解答使用疑难。
              </p>
            </div>
            <div className="pt-4 text-xs font-mono text-brand-text-subtle">
              Telegram Official Channel & Community Group
            </div>
          </div>

        </div>

        {/* 板块底部站内跳转 */}
        <div className="pt-10">
          <Link
            to="/advantages/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group"
          >
            <span>深入了解核心优势与技术选型</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
