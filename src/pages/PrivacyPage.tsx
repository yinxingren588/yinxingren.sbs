import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, OFFICIAL_KEYWORD, SITE_URL } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import { ChevronRight, Home, Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/privacy/'].title;
  }, []);

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 面包屑导航 */}
        <nav className="flex items-center gap-2 text-xs font-mono text-brand-text-subtle mb-8" aria-label="面包屑导航">
          <Link to="/" className="hover:text-brand-primary flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>首页</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-brand-text-body font-medium">隐私政策</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="mb-10 lg:mb-12 border-b border-brand-border/70 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>PRIVACY POLICY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading tracking-tight mb-4">
            {BRAND_NAME}隐私保护政策与数据说明 - {OFFICIAL_KEYWORD}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-text-subtle">
            <span>发布生效日期：2026年10月17日</span>
            <span>•</span>
            <span>站点域名：{SITE_URL}</span>
          </div>
        </div>

        {/* 隐私政策核心章节 */}
        <div className="space-y-10 text-sm sm:text-base text-brand-text-body leading-relaxed">
          
          {/* 1. 基本准则与声明原则 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">01.</span>
              <span>数据处理基本原则</span>
            </h2>
            <p className="text-brand-text-muted">
              {BRAND_NAME}（以下简称“本站”，域名为 {SITE_URL}）高度尊重并保护访问者的个人隐私权益。本政策旨在基于我们实际的软件代码与网络部署架构，向您如实、透明地说明本站在您浏览期间的数据处理实际情况。
            </p>
            <p className="text-brand-text-muted">
              我们遵循“代码即事实”原则，不作虚无缥缈的绝对化合规夸大，亦不掩饰网络基础设施的常规技术特征，严格区分浏览器前端行为、客户端跳转行为与底层部署服务器日志。
            </p>
          </section>

          {/* 2. 浏览器前端行为核查（Cookie/存储/追踪器等） */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">02.</span>
              <span>浏览器端技术行为实际核查说明</span>
            </h2>
            <p className="text-brand-text-muted">
              本站前端代码经全面静态分析与运行时审查，已确认以下事实：
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-text-muted pl-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                <span><strong>无 Cookie 植入：</strong>本站前端代码未设置、未写入任何业务 Cookie 或跟踪型持久 Cookie。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                <span><strong>无 本地存储数据滥用：</strong>本站未使用 localStorage 或 sessionStorage 存储任何用户的个人身份信息、设备指纹或浏览偏好。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                <span><strong>无 统计追踪器与像素：</strong>本站前端未集成 Google Analytics、百度统计、Meta Pixel 或任何第三方广告追踪 SDK。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                <span><strong>无 前端主动网络接口：</strong>页面不包含任何用户输入表单，无用于向私有 API 提交个人数据的 fetch、axios 或 WebSocket 接口。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 mt-2"></span>
                <span><strong>无 外部动态资源载入：</strong>全站字体、SVG 矢量图标与样式资源均随打包产物本地化分发，无调用外部不受控的 CDN 动态脚本。</span>
              </li>
            </ul>
          </section>

          {/* 3. 外部跳转行为与数据边界说明 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">03.</span>
              <span>外部商业与社群链接跳转说明</span>
            </h2>
            <p className="text-brand-text-muted">
              当您在浏览本站时主动点击外部链接，其数据传输边界如下：
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-1.5">
                <h3 className="text-sm font-semibold text-brand-text-heading">
                  1. 跳转第三方合作平台（AFF 商业链接）
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  点击“前往合作平台”相关按钮时，浏览器将直接通过带有 `target="_blank"` 和 `rel="sponsored noopener noreferrer"` 属性的超链接访问合作平台网址（链接中附带公开推广代码）。本站前端在跳转过程中不拦截、不向自建服务器发送点击日志，亦不向合作平台传递您的任何个人资料。进入合作平台后的所有浏览与注册行为均独立受合作平台自身的隐私政策管辖。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-1.5">
                <h3 className="text-sm font-semibold text-brand-text-heading">
                  2. 跳转 Telegram 官方频道与交流群
                </h3>
                <p className="text-xs text-brand-text-muted leading-relaxed">
                  点击 Telegram 相关按钮为单纯的外部超链接打开行为（通过普通 &lt;a&gt; 标签打开 https://t.me/...）。本站绝不会、亦无法通过此操作向 Telegram 官方或交流群自动提交任何访客的设备数据或个人信息。
                </p>
              </div>
            </div>
          </section>

          {/* 4. 底层托管服务器日志规范 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">04.</span>
              <span>基础设施托管与服务器日志说明</span>
            </h2>
            <p className="text-brand-text-muted">
              尽管本站前端页面不收集个人信息，但在当代互联网公网通信架构下，承载本站静态网页分发的底层 Web 服务器（如 Nginx/Apache 代理或边缘 CDN 节点）会根据网络协议规范自动记录标准的基础网络访问日志。
            </p>
            <p className="text-brand-text-muted">
              此类日志通常包括：访问请求时间戳、客户端公网 IP 地址、HTTP 请求方法与路径、浏览器 User-Agent 标识以及返回的 HTTP 响应状态码。此类数据属于底层网络通信的基础运维技术数据，主要用于网络基础设施防范恶意流量攻击（如 DDoS 防护）、爬虫频次限制与排查服务器故障。此类日志在到达既定轮转周期后由服务器自动覆盖删除，本站绝不将其用于分析或关联任何特定自然人的真实个人身份。
            </p>
          </section>

          {/* 5. 第三方合作平台隐私独立性 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">05.</span>
              <span>合作平台隐私权独立性与用户控制</span>
            </h2>
            <p className="text-brand-text-muted">
              本站为第三方信息站，与第三方合作平台为独立的商业合作关系。当您在合作平台建立账户、绑定支付方式或配置客户端中继节点时，相关数据的存储、加密与保管责任均由该合作平台直接承担。我们强烈建议您在完成订阅前，仔细阅读该合作平台的隐私权协议。
            </p>
          </section>

          {/* 6. 政策更新与联系 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">06.</span>
              <span>政策修订与联系通道</span>
            </h2>
            <p className="text-brand-text-muted">
              我们可能会因技术架构调整或合规要求对本隐私政策进行适时修订。更新后的政策将即时在此发布并标明固定生效日期。如您对本站的数据透明度有任何反馈或技术疑问，欢迎通过本站【联系与交流】页面加入 Telegram 官方交流群与我们探讨。
            </p>
          </section>

        </div>

        {/* 底部站内导航按钮（严格为 0 AFF） */}
        <div className="mt-14 pt-8 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/terms/"
            className="text-xs font-mono text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-1.5"
          >
            <span>查阅服务条款与免责声明</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to="/"
            className="text-xs font-mono text-brand-text-muted hover:text-brand-text-heading transition-colors"
          >
            返回首页
          </Link>
        </div>

      </div>
    </div>
  );
};
