import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AdvantagesPage } from './pages/AdvantagesPage';
import { LocationsPage } from './pages/LocationsPage';
import { PricingPage } from './pages/PricingPage';
import { HelpPage } from './pages/HelpPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* 首页 */}
        <Route index element={<HomePage />} />

        {/* 正式业务与功能内页（支持末尾斜杠与无斜杠规范化重定向） */}
        <Route path="/services/" element={<ServicesPage />} />
        <Route path="/services" element={<Navigate to="/services/" replace />} />

        <Route path="/advantages/" element={<AdvantagesPage />} />
        <Route path="/advantages" element={<Navigate to="/advantages/" replace />} />

        <Route path="/locations/" element={<LocationsPage />} />
        <Route path="/locations" element={<Navigate to="/locations/" replace />} />

        <Route path="/pricing/" element={<PricingPage />} />
        <Route path="/pricing" element={<Navigate to="/pricing/" replace />} />

        <Route path="/help/" element={<HelpPage />} />
        <Route path="/help" element={<Navigate to="/help/" replace />} />

        <Route path="/downloads/" element={<DownloadsPage />} />
        <Route path="/downloads" element={<Navigate to="/downloads/" replace />} />

        <Route path="/contact/" element={<ContactPage />} />
        <Route path="/contact" element={<Navigate to="/contact/" replace />} />

        <Route path="/terms/" element={<TermsPage />} />
        <Route path="/terms" element={<Navigate to="/terms/" replace />} />

        <Route path="/privacy/" element={<PrivacyPage />} />
        <Route path="/privacy" element={<Navigate to="/privacy/" replace />} />

        {/* 404 未找到通配符路由（不自动跳转） */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
