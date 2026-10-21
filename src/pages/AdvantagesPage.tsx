import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AIRPORT_KEYWORD, OFFICIAL_KEYWORD } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import {
  ChevronRight,
  Home,
  Shield,
  GitFork,
  Cpu,
  Feather,
  Users,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Briefcase,
  GraduationCap,
  Code2,
} from 'lucide-react';

export const AdvantagesPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/advantages/'].title;
  }, []);

  const advantages = [
    {
      icon: Shield,
      title: '明确的隐私边界与零网络日志策略',
      desc: '遵循数据最小化原则。跨域访问全程采用高强度工业标准算法封装，本站作为第三方信息与指引平台，绝不探测或存储用户的网络流量、访问记录或订阅密钥。网络通道直接与合作平台建立，保障端到端数据传输私密性。',
      badge: 'Privacy by Design',
    },
    {
      icon: GitFork,
      title: '精细化按需分流，拒绝全局冗余损耗',
      desc: '拒绝“一刀切”的粗暴全局代理。内置成熟的域名与 IP 匹配规则，国内应用与内网资源自动直连，仅在访问跨国协同或代码仓库时经过中继通道。有效避免国内服务验证码频发、访问变慢或本地带宽浪费。',
      badge: 'Smart Rule Routing',
    },
    {
      icon: Cpu,
      title: '全面拥抱开源与通用核心生态',
      desc: '不搞私有协议绑架，不强制用户安装闭源黑盒软件。全面适配经过社区长期公开审计的主流通用核心与工具。用户保有对本地配置文件、规则集及路由行为的完全知情权与控制权。',
      badge: 'Open Ecosystem',
    },
    {
      icon: Feather,
      title: '轻量纯净，无常驻后台全家桶与广告干扰',
      desc: '专注于连接协议本身，不捆绑任何冗余的自启守护服务、常驻弹窗或隐蔽后台组件。在便携笔记本或移动设备上运行时，最大程度降低系统 CPU 与内存负载，延长电池续航。',
      badge: 'Minimal Overhead',
    },
    {
      icon: Users,
      title: '社群联动与公开透明的维护动态',
      desc: '依托官方 Telegram 资讯频道与技术交流群，遇到公网主干抖动或线路例行调优时，公告动态公开透明。用户可在社群内快速查阅排错经验，获得来自社区技术爱好者的互助答疑。',
      badge: 'Transparent Community',
    },
  ];

  const scenarios = [
    {
      icon: Code2,
      title: '软件工程与开源技术研发',
      detail: '解决拉取 GitHub 仓库速度慢、Docker 镜像源超时及 npm/crates 依赖包构建阻滞。保持本地编译与海外源同步的高效流畅。',
    },
    {
      icon: GraduationCap,
      title: '国际学术科研与文献下载',
      detail: '稳定访问 Google Scholar、arXiv、IEEE 与海外开放数据库，文献资料检索与学术论文下载不因网络阻塞而中断。',
    },
    {
      icon: Briefcase,
      title: '跨国团队协同与数字游民办公',
      detail: '顺畅运行 Figma 云端设计看板、海外团队即时协作软件及出海电商后台，随时随地开启移动化数字生产力。',
    },
  ];

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
          <span className="text-brand-text-body font-medium">核心优势与选型价值</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <span>CORE ADVANTAGES & VALUE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {AIRPORT_KEYWORD}核心优势与专线选型考量 - {OFFICIAL_KEYWORD}
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            在纷繁复杂的网络服务市场中，我们坚持不以虚假数值宣传为噱头，不编造贬低同行的对比结论。以下 5 项核心特质源于真实的架构设计哲学与规范化工程实践。
          </p>
        </div>

        {/* 板块 1: 5 项有依据的核心优势 */}
        <div className="mb-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading mb-6">
            经过工程实践检验的 5 项核心价值
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-card space-y-4 hover:border-brand-primary/40 transition-colors ${
                    idx === 0 ? 'md:col-span-2 bg-gradient-to-br from-brand-surface to-brand-elevated/40' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-brand bg-brand-elevated text-brand-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-elevated text-brand-accent border border-brand-border">
                      {adv.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 板块 2: 典型应用场景 */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-text-heading mb-8">
            典型使用场景验证
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((sc, idx) => {
              const Icon = sc.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-brand-surface border border-brand-border shadow-card space-y-3">
                  <div className="w-9 h-9 rounded-brand bg-brand-elevated text-brand-accent flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text-heading">
                    {sc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                    {sc.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 板块 3: 客观选型建议与适用性分析 */}
        <div className="mb-16 p-8 sm:p-10 rounded-2xl bg-brand-surface border border-brand-border shadow-card">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-6 h-6 text-brand-primary" />
              <h2 className="text-xl sm:text-2xl font-bold text-brand-text-heading">
                客观选择建议：此方案是否适合您？
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-brand-elevated/50 border border-brand-border space-y-3">
                <div className="text-sm font-semibold text-brand-accent flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 强烈推荐使用的人群
                </div>
                <ul className="text-xs text-brand-text-muted space-y-2 leading-relaxed">
                  <li>• 追求分流规则透明、不希望被强制修改系统网络行为的工程师</li>
                  <li>• 需要在 Windows / Mac / 手机间多端协同的科研工作者</li>
                  <li>• 重视设备电池续航与系统清洁度，厌恶流氓全家桶软件的用户</li>
                  <li>• 具备基础技术排错能力、乐于通过社群文档解决疑问的数字游民</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-brand-elevated/50 border border-brand-border space-y-3">
                <div className="text-sm font-semibold text-brand-text-muted flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> 建议审慎评估的情况
                </div>
                <ul className="text-xs text-brand-text-muted space-y-2 leading-relaxed">
                  <li>• 期望完全零门槛“一键全包”且不愿了解任何分流规则的新手</li>
                  <li>• 依赖专线硬件路由盒子或硬件级定制固件的企业专有内网</li>
                  <li>• 盲目追求“100%全天候零抖动”等违背公网客观物理规律的绝对承诺</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-brand-text-subtle pt-2 leading-normal">
              声明：本站不制作贬低同业的对比表格，不采用伪造测速截图进行营销推介。网络连接质量客观受制于各地区公网骨干传输与本地宽带环境，建议理性选型。
            </p>
          </div>
        </div>

        {/* 板块 4: 底部站内 CTA 引导（严禁新增 AFF） */}
        <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-card text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading">
              准备好深入了解底层架构或规划方案了吗？
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              查阅我们的服务网络架构解析，或前往套餐页面评估适宜您的订阅周期。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/services/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-colors"
            >
              <span>查看底层服务架构</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/pricing/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
            >
              <span>评估套餐方案规划</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
