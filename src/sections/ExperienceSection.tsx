import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TYPICAL_EXPERIENCES, EXPERIENCES_NOTICE } from '../data/experienceData';
import { ChevronLeft, ChevronRight, Pause, Play, AlertCircle, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [reducedMotion, setReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // 响应式每屏项数计算：桌面 3 项、平板 2 项、手机 1 项
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // 监听 prefers-reduced-motion 系统偏好
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 监听页面可见性（页面隐藏时暂停）
  useEffect(() => {
    const handleVisibility = () => {
      setIsDocumentHidden(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const totalPages = Math.ceil(TYPICAL_EXPERIENCES.length / itemsPerPage);

  // 翻页操作
  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // 自动播放调度（当用户暂停、悬停、聚焦、后台隐藏或开启 reduced-motion 时自动停止）
  const shouldAutoPlay =
    !isPausedByUser && !isHovered && !isFocused && !isDocumentHidden && !reducedMotion;

  useEffect(() => {
    if (!shouldAutoPlay) return;

    const timer = setInterval(() => {
      goToNext();
    }, 8000); // 8 秒周期

    return () => clearInterval(timer);
  }, [shouldAutoPlay, goToNext]);

  // 确保页码不越界
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // 键盘操作（左右箭头）
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // 触摸滑动处理
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative select-none"
      aria-labelledby="experiences-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
              <span>USAGE EXPERIENCES</span>
            </div>
            <h2 id="experiences-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-3">
              隐形人机场典型使用场景与体验示例
            </h2>
            <p className="text-base text-brand-text-body leading-relaxed">
              隐形人官网整理不同角色使用隐形人机场在日常研发、学术查阅、流媒体播放及跨国业务中的典型体验参考。
            </p>
          </div>

          {/* 轮播交互操作控制栏 */}
          <div className="flex items-center gap-2 shrink-0">
            {/* 播放/暂停控制按钮 */}
            <button
              type="button"
              onClick={() => setIsPausedByUser(!isPausedByUser)}
              className="p-2.5 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-body hover:text-brand-text-heading border border-brand-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label={isPausedByUser ? '恢复自动轮播' : '暂停自动轮播'}
            >
              {isPausedByUser ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* 上一组 */}
            <button
              type="button"
              onClick={goToPrev}
              className="p-2.5 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-body hover:text-brand-text-heading border border-brand-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="查看上一组使用场景"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* 下一组 */}
            <button
              type="button"
              onClick={goToNext}
              className="p-2.5 rounded-brand bg-brand-surface hover:bg-brand-elevated text-brand-text-body hover:text-brand-text-heading border border-brand-border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
              aria-label="查看下一组使用场景"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 强制要求之真实性免责提示条 */}
        <div className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border/70 mb-8 flex items-start sm:items-center gap-3 text-xs text-brand-text-muted">
          <AlertCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5 sm:mt-0" />
          <span>{EXPERIENCES_NOTICE}</span>
        </div>

        {/* 轮播视窗容器（支持触摸滑动与键盘快捷键） */}
        <div
          ref={containerRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="overflow-hidden focus:outline-none focus:ring-1 focus:ring-brand-primary/40 rounded-2xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="典型使用场景轮播"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {/* 分页切片无重复项，杜绝重复项进入焦点循环 */}
            {Array.from({ length: totalPages }).map((_, pageIdx) => {
              const pageItems = TYPICAL_EXPERIENCES.slice(
                pageIdx * itemsPerPage,
                (pageIdx + 1) * itemsPerPage
              );

              return (
                <div
                  key={pageIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`第 ${pageIdx + 1} 页，共 ${totalPages} 页`}
                >
                  {pageItems.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between shadow-card hover:border-brand-primary/40 transition-colors"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border">
                            {item.tag}
                          </span>
                          <span className="text-xs font-mono text-brand-text-subtle">
                            SCENARIO
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-brand-text-heading mb-2">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed mb-3">
                            {item.scenario}
                          </p>
                          <div className="p-3 rounded-brand bg-brand-elevated/50 border border-brand-border/60 text-xs text-brand-text-body leading-relaxed">
                            <span className="text-brand-accent font-semibold block mb-1">
                              接入与分流体验：
                            </span>
                            {item.workflow}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-brand-border/60 flex items-center gap-2 text-[11px] font-mono text-brand-text-subtle">
                        <Terminal className="w-3.5 h-3.5 text-brand-primary" />
                        <span>{item.environment}</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部指示圆点 */}
        <div className="flex justify-center items-center gap-2 pt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary ${
                currentPage === idx
                  ? 'w-7 bg-brand-primary'
                  : 'w-2 bg-brand-border hover:bg-brand-border-hover'
              }`}
              aria-label={`跳转至第 ${idx + 1} 屏`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
