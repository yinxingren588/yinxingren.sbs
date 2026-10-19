import React from 'react';
import {
  HeroSection,
  ServicesSection,
  AdvantagesSection,
  WorkflowSection,
  UseCasesSection,
  LocationsSection,
  PricingSection,
  ExperienceSection,
  FaqSection,
} from '../sections';

export const HomePage: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero 首屏 */}
      <HeroSection />

      {/* 2. 服务介绍 */}
      <ServicesSection />

      {/* 3. 核心优势 */}
      <AdvantagesSection />

      {/* 4. 使用流程 */}
      <WorkflowSection />

      {/* 5. 使用场景 */}
      <UseCasesSection />

      {/* 6. 全球线路或服务范围 */}
      <LocationsSection />

      {/* 7. 套餐与方案选择指南 */}
      <PricingSection />

      {/* 8. 场景体验走马灯 */}
      <ExperienceSection />

      {/* 9. 常见问题解答 FAQ */}
      <FaqSection />
    </div>
  );
};
