import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../config/site';
import { HELP_ARTICLES, HELP_CATEGORIES } from '../data/helpData';
import {
  ChevronRight,
  Home,
  Search,
  X,
  BookOpen,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  Tag,
} from 'lucide-react';

export const HelpPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('help-01');

  useEffect(() => {
    document.title = '帮助中心与排错指引 - 隐形人';
  }, []);

  // 纯前端动态搜索与分类过滤
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return HELP_ARTICLES.filter((article) => {
      const matchesCategory =
        selectedCategory === 'all' || article.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      const titleMatch = article.title.toLowerCase().includes(q);
      const summaryMatch = article.summary.toLowerCase().includes(q);
      const contentMatch = article.content.some((c) => c.toLowerCase().includes(q));
      const tagsMatch = article.tags.some((t) => t.toLowerCase().includes(q));

      return titleMatch || summaryMatch || contentMatch || tagsMatch;
    });
  }, [selectedCategory, searchQuery]);

  // 分类数量严格基于实际数据动态计算
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: HELP_ARTICLES.length,
    };
    HELP_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = HELP_ARTICLES.filter((a) => a.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

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
          <span className="text-brand-text-body font-medium">帮助中心与常见问题</span>
        </nav>

        {/* 独立 H1 与导言 */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE & GUIDES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-text-heading tracking-tight mb-6">
            {BRAND_NAME}帮助中心与排错指引
          </h1>
          <p className="text-base sm:text-lg text-brand-text-body leading-relaxed">
            为您整理从入门连接、订阅选购、通用客户端分流模式设置，到常见多设备并发排错的标准化知识库。所有内容在当前页面即时展开，不产生额外跳转路由。
          </p>
        </div>

        {/* 纯前端搜索框 */}
        <div className="mb-8 max-w-2xl">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-subtle" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索问题关键词（如：分流、订阅、超时、多设备、规则模式...）"
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-text-heading placeholder-brand-text-subtle focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary text-sm shadow-subtle"
              aria-label="搜索帮助中心文章"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-md text-brand-text-subtle hover:text-brand-text-heading"
                aria-label="清空搜索输入"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 分类筛选标签栏（根据实际数据动态计算数量） */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {HELP_CATEGORIES.map((cat) => {
            const count = categoryCounts[cat.id] || 0;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                  isActive
                    ? 'bg-brand-primary text-brand-bg font-semibold'
                    : 'bg-brand-surface text-brand-text-body hover:bg-brand-elevated border border-brand-border'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-brand-bg/20 text-brand-bg'
                      : 'bg-brand-elevated text-brand-text-subtle'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 结果数量统计栏 */}
        <div className="flex items-center justify-between text-xs font-mono text-brand-text-subtle mb-6 pb-2 border-b border-brand-border/60">
          <div>
            匹配文章结果：
            <span className="text-brand-primary font-bold ml-1">
              {filteredArticles.length}
            </span> 篇
            {searchQuery && (
              <span className="ml-2 text-brand-text-muted">
                （包含关键词 “{searchQuery}”）
              </span>
            )}
          </div>
          {(searchQuery || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={clearSearch}
              className="text-brand-accent hover:underline flex items-center gap-1"
            >
              <span>重置所有筛选</span>
            </button>
          )}
        </div>

        {/* 文章列表展示区（当前页折叠展开） */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-4">
            {filteredArticles.map((article) => {
              const isOpen = expandedId === article.id;
              const contentId = `help-content-${article.id}`;
              const headerId = `help-header-${article.id}`;

              return (
                <div
                  key={article.id}
                  className="rounded-2xl bg-brand-surface border border-brand-border overflow-hidden shadow-subtle transition-colors hover:border-brand-primary/30"
                >
                  <h3>
                    <button
                      id={headerId}
                      type="button"
                      onClick={() => toggleExpand(article.id)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="w-full px-6 py-5 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-primary group"
                    >
                      <div className="space-y-1 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-brand-primary bg-brand-elevated px-2 py-0.5 rounded border border-brand-border">
                            {article.categoryName}
                          </span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-brand-text-heading group-hover:text-brand-accent transition-colors pt-1">
                          {article.title}
                        </div>
                        <div className="text-xs text-brand-text-muted leading-relaxed">
                          {article.summary}
                        </div>
                      </div>

                      <span className="p-1.5 rounded-lg bg-brand-elevated text-brand-text-muted group-hover:text-brand-text-heading shrink-0 transition-transform duration-200 mt-1 sm:mt-0">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  {/* 展开的结构化指南详情 */}
                  {isOpen && (
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-6 pb-6 pt-2 border-t border-brand-border/60 text-xs sm:text-sm text-brand-text-body space-y-3 bg-brand-elevated/20"
                    >
                      <div className="space-y-2.5 pt-2">
                        {article.content.map((paragraph, pIdx) => (
                          <p key={pIdx} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* 标签 */}
                      <div className="pt-4 border-t border-brand-border/40 flex flex-wrap items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-brand-text-subtle" />
                        {article.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-brand-surface text-brand-text-muted text-[11px] font-mono border border-brand-border/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          /* 空结果状态提示 */
          <div className="py-16 px-6 text-center rounded-2xl bg-brand-surface border border-brand-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-elevated text-brand-text-subtle mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-text-heading mb-2">
              未找到匹配的帮助指引
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted max-w-md mx-auto mb-6 leading-relaxed">
              未检索到与 “{searchQuery}” 相关的文章。建议尝试更换更简短的关键词，或重置筛选条件查看全部分类。
            </p>
            <button
              type="button"
              onClick={clearSearch}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-brand bg-brand-primary text-brand-bg font-semibold text-xs transition-colors hover:bg-brand-primary-hover"
            >
              <span>清除搜索并查看全部文章</span>
            </button>
          </div>
        )}

        {/* 底部引导栏：严格使用站内 Link，不使用 AFF */}
        <div className="mt-16 p-8 rounded-2xl bg-brand-surface border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6 shadow-card text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-brand-text-heading flex items-center justify-center md:justify-start gap-2">
              <HelpCircle className="w-5 h-5 text-brand-primary" />
              <span>需要进一步的配置工具或咨询？</span>
            </h3>
            <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
              您可直接前往客户端下载中心获取适配软件，或通过联系页面加入官方 Telegram 交流群与社区互动。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/downloads/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-primary hover:bg-brand-primary-hover text-brand-bg font-semibold text-sm transition-colors"
            >
              <span>前往客户端下载</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-sm font-medium transition-colors"
            >
              <span>联系与交流社群</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
