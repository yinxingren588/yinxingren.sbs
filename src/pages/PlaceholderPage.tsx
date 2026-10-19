import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getRouteMeta } from '../config/routes';
import { TemporaryNoindex } from '../components/TemporaryNoindex';
import { ArrowLeft, Clock } from 'lucide-react';

export const PlaceholderPage: React.FC = () => {
  const location = useLocation();
  const meta = getRouteMeta(location.pathname);
  const title = meta?.title || '页面规划中 - 隐形人';
  const pageName = meta?.navTitle || meta?.name || '当前页面';

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <TemporaryNoindex title={title} />
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-brand bg-brand-elevated text-brand-accent border border-brand-border mb-6">
        <Clock className="w-6 h-6" />
      </div>
      <div className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-mono bg-brand-elevated text-brand-accent border border-brand-border">
        开发计划中 · 步骤阶段占位
      </div>
      <h1 className="text-3xl font-bold text-brand-text-heading mb-4">
        {pageName}
      </h1>
      <p className="text-brand-text-muted max-w-md mx-auto mb-8 text-base">
        {meta?.description || '本页面正文将在后续对应步骤中完善。当前已完成基础路由与布局配置，并标记为临时 noindex。'}
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-brand bg-brand-elevated hover:bg-brand-surface text-brand-text-heading border border-brand-border hover:border-brand-border-hover transition-colors text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首页
      </Link>
    </div>
  );
};
