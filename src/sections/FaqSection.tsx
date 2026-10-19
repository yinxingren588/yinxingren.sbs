import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  // 默认展开第1项和第4项（第4项为重点搜索词核验问答）
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-plan-selection': true,
    'faq-official-verification': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-t border-brand-border/70 relative" aria-labelledby="faq-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 头部标题与导言 */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-elevated text-brand-primary border border-brand-border mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-text-heading tracking-tight mb-4">
            常见问题解答与入口核验说明
          </h2>
          <p className="text-base text-brand-text-body leading-relaxed">
            围绕套餐挑选、多端配置、身份核实与日常连接排错提供清晰客观的解答。
          </p>
        </div>

        {/* 8 项无障碍手风琴列表 */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = !!openItems[item.id];
            const contentId = `faq-answer-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-brand-surface border border-brand-border overflow-hidden shadow-subtle transition-colors hover:border-brand-primary/30"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 group"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-brand-primary/60 group-hover:text-brand-primary font-bold">
                        {(index + 1).toString().padStart(2, '0')}.
                      </span>
                      <span className="text-base sm:text-lg font-semibold text-brand-text-heading group-hover:text-brand-accent transition-colors">
                        {item.question}
                      </span>
                    </span>
                    <span className="p-1 rounded bg-brand-elevated text-brand-text-muted group-hover:text-brand-text-heading shrink-0 transition-transform duration-200">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                {/* 折叠内容必须真实存在于 DOM 中 */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headerId}
                  className={`px-6 pb-6 pt-1 text-sm text-brand-text-muted leading-relaxed border-t border-brand-border/40 transition-all ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <p className="max-w-4xl">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引导栏：严格使用站内 Link，不使用 AFF */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-brand-text-heading flex items-center justify-center sm:justify-start gap-2">
              <MessageSquare className="w-4 h-4 text-brand-primary" />
              <span>仍有未解答的使用疑问？</span>
            </h4>
            <p className="text-xs text-brand-text-muted">
              可查阅详尽的图文配置手册，或加入 Telegram 官方交流群获取实时互助。
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/help/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-brand-elevated hover:bg-brand-border text-brand-text-heading border border-brand-border text-xs font-semibold transition-colors"
            >
              <span>帮助中心教程</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-brand bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary border border-brand-primary/20 text-xs font-semibold transition-colors"
            >
              <span>联系与交流社群</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
