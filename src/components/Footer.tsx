import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, SITE_IDENTITY } from '../config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-surface border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 四栏布局 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 第1栏：品牌介绍与身份说明 */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-brand-text-heading font-bold text-lg focus:outline-none"
            >
              <div className="w-7 h-7 rounded-brand bg-white border border-brand-border flex items-center justify-center overflow-hidden p-0.5 shadow-sm shrink-0">
                <img
                  src="/logo-avatar.png"
                  alt={`${BRAND_NAME} 标志`}
                  className="w-full h-full object-contain rounded"
                  width={28}
                  height={28}
                />
              </div>
              <span>{BRAND_NAME}</span>
              <span className="text-xs font-mono text-brand-primary">{BRAND_NAME_EN}</span>
            </Link>

            <p className="text-sm text-brand-text-muted leading-relaxed">
              {SITE_IDENTITY.description}
            </p>

            <div className="p-3 rounded-brand bg-brand-elevated/70 border border-brand-border text-xs text-brand-text-subtle leading-normal">
              {SITE_IDENTITY.commercialNotice}
            </div>
          </div>

          {/* 第2栏：产品与服务 */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-text-heading mb-4">
              产品与服务
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/services/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  服务介绍
                </Link>
              </li>
              <li>
                <Link
                  to="/advantages/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  核心优势
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  节点线路
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  客户端下载
                </Link>
              </li>
            </ul>
          </div>

          {/* 第3栏：支持与帮助 */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-text-heading mb-4">
              支持与帮助
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/pricing/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  订阅套餐
                </Link>
              </li>
              <li>
                <Link
                  to="/help/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  帮助中心
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  联系我们
                </Link>
              </li>
            </ul>
          </div>

          {/* 第4栏：法律政策 */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-text-heading mb-4">
              法律与合规
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/terms/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  服务条款
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy/"
                  className="text-brand-text-body hover:text-brand-primary transition-colors"
                >
                  隐私政策
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-brand-border text-xs text-brand-text-subtle">
              身份属性：第三方合作导航站（未核实官方自营）
            </div>
          </div>
        </div>

        {/* 底端版权与免责声明栏 */}
        <div className="pt-8 mt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-text-subtle">
          <p>© {new Date().getFullYear()} {BRAND_NAME} ({BRAND_NAME_EN}). 保留所有权利。</p>
          <p className="text-center sm:text-right">
            相关商标与品牌权利归各权利人所有。本站仅供信息聚合与指引，不承诺未证实之技术参数。
          </p>
        </div>
      </div>
    </footer>
  );
};
