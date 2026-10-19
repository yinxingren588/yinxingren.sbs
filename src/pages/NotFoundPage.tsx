import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, BookOpen, Layers } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = '404 - 页面未找到 | 隐形人';

    // 确保 404 页面不被搜索引擎索引
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    let created = false;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
      created = true;
    }
    const prev = meta.content;
    meta.content = 'noindex, nofollow';

    return () => {
      if (created && meta && meta.parentNode) {
        meta.parentNode.removeChild(meta);
      } else if (meta) {
        meta.content = prev;
      }
    };
  }, []);

  return (
    <div className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-elevated text-brand-primary border border-brand-border mb-6 shadow-subtle">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="text-xs font-mono text-brand-accent uppercase tracking-widest mb-3">
        HTTP 404 · NOT FOUND
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-heading tracking-tight mb-4">
        抱歉，您访问的页面不存在
      </h1>

      <p className="text-sm sm:text-base text-brand-text-muted mb-10 max-w-lg mx-auto leading-relaxed">
        您请求的网址可能已变更、被移除，或输入的地址有误。本站不会自动跳转，建议通过下方提供的核心导航入口继续浏览：
      </p>

      {/* 规范要求：提供返回首页、服务介绍和帮助中心三个站内导航入口，严禁包含 AFF */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-all shadow-subtle hover:shadow-card"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回网站首页</span>
        </Link>

        <Link
          to="/services/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
        >
          <Layers className="w-4 h-4 text-brand-primary" />
          <span>服务与架构介绍</span>
        </Link>

        <Link
          to="/help/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
        >
          <BookOpen className="w-4 h-4 text-brand-accent" />
          <span>帮助中心与排错</span>
        </Link>
      </div>

      <p className="text-xs font-mono text-brand-text-subtle mt-10">
        若您确认此为站内失效死链，欢迎在帮助中心查阅相关常见问题。
      </p>
    </div>
  );
};
