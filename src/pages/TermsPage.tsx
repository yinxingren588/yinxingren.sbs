import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, OFFICIAL_KEYWORD, SITE_URL } from '../config/site';
import { SEO_PAGES } from '../config/seo';
import { ChevronRight, Home, Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = SEO_PAGES['/terms/'].title;
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
          <span className="text-brand-text-body font-medium">服务条款</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="mb-10 lg:mb-12 border-b border-brand-border/70 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading tracking-tight mb-4">
            {BRAND_NAME}服务条款与使用协议 - {OFFICIAL_KEYWORD}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-text-subtle">
            <span>发布生效日期：2026年10月17日</span>
            <span>•</span>
            <span>站点域名：{SITE_URL}</span>
          </div>
        </div>

        {/* 条款核心正文 */}
        <div className="space-y-10 text-sm sm:text-base text-brand-text-body leading-relaxed">
          
          {/* 1. 总则与本站身份定位 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">01.</span>
              <span>本站实际身份与服务定位</span>
            </h2>
            <p className="text-brand-text-muted">
              欢迎访问本站（{SITE_URL}）。在未获得品牌自营确凿证据或官方书面直接授权的前提下，本站定位为“{BRAND_NAME}”第三方信息展示、技术使用指引与第三方合作平台导航站，不冒称为官方品牌自营官网。
            </p>
            <p className="text-brand-text-muted">
              本站仅提供客观的知识库、多终端配置技巧与合作平台入口指引。凡持有品牌拼音域名、展示相关品牌标识或持有推广推荐链接，均不构成官方自营或排他性独家授权的凭证。
            </p>
          </section>

          {/* 2. 合作平台权责与商业交易分离 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">02.</span>
              <span>第三方合作关系与交易履约说明</span>
            </h2>
            <p className="text-brand-text-muted">
              本站不自建、不持有、不运营任何中继服务器节点，亦不向用户直接提供网络代理服务。本站不设立任何用户账户注册系统、不设在线支付接口、不接触任何用户资金流。
            </p>
            <p className="text-brand-text-muted">
              所有实际的方案订阅、账户充值、支付结算、密钥分发、节点调度以及退订退款售后服务，均由相应的第三方合作平台独立承办与履约。您与合作平台之间的交易关系受合作平台自身服务协议约束，本站不对合作平台的商业履约提供担保。
            </p>
          </section>

          {/* 3. 推广链接与佣金披露 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">03.</span>
              <span>推广链接及佣金披露（Affiliate Notice）</span>
            </h2>
            <p className="text-brand-text-muted">
              依据商业合规透明性原则，本站特此明确说明：本站所提供的部分外部商业跳转按钮包含推广链接。当您通过本站链接跳转至合作平台并最终完成方案订阅时，本站可能会从合作平台获得一定比例的合作佣金。
            </p>
            <p className="text-brand-text-muted">
              实际的服务价格、促销优惠、可用线路与售后服务均以合作平台结算页面当前显示为准。本站不承诺任何未核实的专属价格，亦不向用户收取任何额外中介费用。
            </p>
          </section>

          {/* 4. 用户合规与合法使用守则 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">04.</span>
              <span>用户行为与法律合规守则</span>
            </h2>
            <p className="text-brand-text-muted">
              访问者在参考本站技术文档或使用合作平台网络中继服务时，必须严格遵守所在国家或地区的宪法、法律法规及互联网管理规定。严禁利用本站技术指引或相关工具从事包括但不限于侵犯他人合法权益、危害网络基础设施安全、传播恶意软件、非法入侵计算机系统或从事非法金融交易等违法犯罪行为。
            </p>
            <p className="text-brand-text-muted">
              如因用户个人违法违规行为引发的一切法律责任与纠纷，均由行为人个人自行独立承担。
            </p>
          </section>

          {/* 5. 知识产权与免责界限 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">05.</span>
              <span>知识产权与合理免责界限</span>
            </h2>
            <p className="text-brand-text-muted">
              本站所提及的相关产品名称、Logo 及商标所有权均归属于各自合法的权利人所有。本站使用相关标识仅为说明服务内容与提供指引索引，不代表对权利人的从属或替代关系。
            </p>
            <p className="text-brand-text-muted">
              本站团队尽合理审慎义务核查并整理网站发布的内容，但鉴于互联网公网骨干传输环境与第三方合作平台业务策略存在动态调整的客观情况，本站不对线路可用性的绝对连续性提供商业担保。本站不虚构任何未经证实的法人主体或离岸司法管辖区，若发生争议，各方应本着客观诚信原则友好协商处理。
            </p>
          </section>

          {/* 6. 协议更新与联络 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-brand-text-heading flex items-center gap-2">
              <span className="text-brand-primary font-mono text-base">06.</span>
              <span>协议修订与解释</span>
            </h2>
            <p className="text-brand-text-muted">
              本站保留根据服务变更与合规要求适时修订本条款的权利。修订后的条款一经发布即行生效。若您对本条款有任何疑问，可通过本站【联系与交流】页面加入 Telegram 官方交流群进行咨询。
            </p>
          </section>

        </div>

        {/* 底部站内导航按钮（严格为 0 AFF） */}
        <div className="mt-14 pt-8 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/privacy/"
            className="text-xs font-mono text-brand-primary hover:text-brand-accent transition-colors flex items-center gap-1.5"
          >
            <span>查阅隐私权保护政策</span>
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
