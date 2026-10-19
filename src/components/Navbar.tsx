import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '../config/site';
import { APP_ROUTES, isAffAllowedOnPath } from '../config/routes';
import { OfficialLink } from './OfficialLink';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 严格依据路由规则判断是否允许渲染AFF商业入口
  // 在 /terms/、/privacy/ 和 404 页面中，showAff 为 false，彻底隐藏任何 AFF
  const showAff = isAffAllowedOnPath(location.pathname);

  // 顶部导航栏展示的站内页面列表
  const navItems = APP_ROUTES.filter((r) => r.showInNav);

  // 路由变化时自动关闭移动端菜单并还原滚动
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Escape 键关闭机制与焦点还原
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 背景滚动锁定与清理
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // 开启时聚焦到菜单内的首个导航项
      const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 键盘焦点捕获（Focus Trap）处理
  const handleMobileMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Tab' || !mobileMenuRef.current) return;

    const focusables = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusables.length === 0) return;

    const firstElement = focusables[0];
    const lastElement = focusables[focusables.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-bg/85 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo 区块：仅返回首页，绝不使用 AFF */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-brand px-1"
            aria-label={`${BRAND_NAME} 首页`}
          >
            <div className="w-9 h-9 rounded-brand bg-white border border-brand-border flex items-center justify-center overflow-hidden p-0.5 shadow-sm group-hover:border-brand-primary/50 transition-colors shrink-0">
              <img
                src="/logo-avatar.png"
                alt={`${BRAND_NAME} 标志`}
                className="w-full h-full object-contain rounded"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-brand-text-heading tracking-tight flex items-center gap-1.5">
                {BRAND_NAME}
                <span className="text-xs font-mono font-normal text-brand-primary bg-brand-primary/10 px-1.5 py-0.2 rounded border border-brand-primary/20">
                  {BRAND_NAME_EN}
                </span>
              </span>
            </div>
          </Link>

          {/* 桌面端主导航 */}
          <nav className="hidden md:flex items-center gap-1" aria-label="主导航">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 rounded-brand text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-elevated'
                      : 'text-brand-text-body hover:text-brand-text-heading hover:bg-brand-surface'
                  }`}
                >
                  {item.navTitle}
                </Link>
              );
            })}
          </nav>

          {/* 桌面端商业操作 CTA 入口：在条款、隐私及404页面严格隐藏 */}
          <div className="hidden md:flex items-center">
            {showAff && (
              <OfficialLink
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-all shadow-subtle hover:shadow-card"
                aria-label="点击前往官方平台"
              >
                <span>点击前往官方平台</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            )}
          </div>

          {/* 移动端汉堡切换按钮 */}
          <div className="flex md:hidden items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-brand text-brand-text-body hover:text-brand-text-heading hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-primary border border-brand-border"
              aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端遮罩与抽屉 */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={mobileMenuRef}
          onKeyDown={handleMobileMenuKeyDown}
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-brand-bg/95 backdrop-blur-xl border-t border-brand-border z-50 flex flex-col justify-between p-6 overflow-y-auto overflow-x-hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="移动端全屏导航"
        >
          <div className="flex flex-col gap-2">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-text-muted px-3 py-1">
              站内导航
            </div>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-brand text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-elevated border border-brand-primary/20'
                      : 'text-brand-text-body hover:text-brand-text-heading hover:bg-brand-surface'
                  }`}
                >
                  <span>{item.navTitle}</span>
                  <span className="text-xs font-mono text-brand-text-subtle">
                    {item.path}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* 移动端底部操作与说明（若允许AFF则展示） */}
          <div className="pt-6 border-t border-brand-border space-y-4">
            {showAff && (
              <OfficialLink
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-base transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="点击前往官方平台"
              >
                <span>点击前往官方平台</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            )}
            <p className="text-xs text-brand-text-subtle text-center">
              按 Esc 键或点击右上角按钮即可关闭菜单
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
