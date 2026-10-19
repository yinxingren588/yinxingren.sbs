import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND_NAME,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_GROUP_URL,
} from '../config/site';
import { OfficialLink } from '../components/OfficialLink';
import {
  ChevronRight,
  Home,
  MessageSquare,
  HelpCircle,
  Headphones,
  Users,
  Send,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = '联系方式与交流社群 - 隐形人';
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
          <span className="text-brand-text-body font-medium">联系方式与社群</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION & SUPPORT CHANNELS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {BRAND_NAME}联系方式与社区支持渠道
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            为保障沟通效率与信息安全，我们明确划分不同事务的处理渠道：常见技术使用疑惑优先查阅帮助中心，账户与订单问题由合作平台客服承办，网络动态与技术互助通过官方 Telegram 社区同步。
          </p>
        </div>

        {/* 真实性与合规声明：不伪造表单，不虚构无依据的联系方式 */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-brand-surface border border-brand-border flex items-start gap-3.5 text-xs text-brand-text-muted">
          <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-brand-text-heading block">
              联系方式与客服说明
            </span>
            <p className="leading-relaxed">
              本站为第三方信息展示站，不设置无后端支持的虚假留言表单，不伪造电话、办公地址、企业微信或 QQ 客服。如遇具体订单、充值或退款售后问题，请务必前往合作平台服务中心提交正式工单。
            </p>
          </div>
        </div>

        {/* 三大多元事务渠道划分卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* 渠道 1: 使用疑问（引导至 /help/） */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-brand bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-text-heading">
                使用指引与常见问题
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                遇到节点超时、客户端分流不生效、订阅无法更新或系统时间误差等常见使用故障？详尽的步骤解答已收录于帮助中心。
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-border/60">
              <Link
                to="/help/"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading text-sm font-semibold transition-colors"
              >
                <span>前往帮助中心查阅</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 渠道 2: 账户与订单问题（通过 OfficialLink 前往合作平台查找客服） */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-brand bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-text-heading">
                账户、订单与售后问题
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                涉及会员方案订购、账单支付校验、退订申请或个人账户密钥重置等商业事务，请直接登录合作平台服务中心查找客服与工单系统。
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-border/60">
              <OfficialLink
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg text-sm font-semibold transition-all shadow-subtle hover:shadow-card"
                aria-label="前往合作平台查找客服"
              >
                <span>前往合作平台查找客服</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            </div>
          </div>

          {/* 渠道 3: 社区互助与通知频道 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-brand-text-heading">
                社区交流与实时公告
              </h3>
              <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                关注主干网络节点维护预告，接收线路调度与版本演进通知，与其他用户在交流群中分享多设备分流配置经验。
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-brand-border/60">
              <a
                href="#telegram-section"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading text-sm font-semibold transition-colors"
              >
                <span>查看 Telegram 社群入口</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Telegram 官方联系渠道区域（严格按规则增加两个并列按钮，使用普通 <a> 标签） */}
        <div
          id="telegram-section"
          className="p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border shadow-card space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#229ED9]/10 text-[#229ED9]">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
                Telegram 官方社区与交流入口
              </h2>
              <p className="text-xs sm:text-sm text-brand-text-muted mt-1">
                实时动态推送与用户互助研讨平台，仅渲染一次，不作为订单或退款受理渠道。
              </p>
            </div>
          </div>

          {/* 两个并列按钮：移动端自然换行/纵向排列，键盘可访问，完整保留+号与邀请码 */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            {/* 按钮 1: 进入Telegram官方频道 */}
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-brand bg-[#229ED9] hover:bg-[#1E88C7] text-white font-semibold text-sm transition-colors shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#229ED9]/50"
              aria-label="进入Telegram官方频道获取公告"
            >
              <Send className="w-4 h-4" />
              <span>进入Telegram官方频道</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            {/* 按钮 2: 加入Telegram交流群 */}
            <a
              href={TELEGRAM_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border hover:border-brand-border-hover font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
              aria-label="加入Telegram交流群参与讨论"
            >
              <Users className="w-4 h-4 text-brand-primary" />
              <span>加入Telegram交流群</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* 规范明确之频道与群组职能定位声明 */}
          <div className="p-4 rounded-xl bg-brand-elevated/40 border border-brand-border/60 text-xs text-brand-text-subtle leading-relaxed">
            <span className="font-semibold text-brand-text-muted block mb-1">
              社群职能边界提示：
            </span>
            Telegram 官方频道与交流群用于发布线路变更通知、技术动态与用户使用经验互助。社群管理员与群友非官方财务与订单客服，社群内绝不索取您的个人支付凭据、账户密码或敏感数据；涉及账户财务与订单处理请通过上方合作平台工单提交。
          </div>
        </div>

      </div>
    </div>
  );
};
