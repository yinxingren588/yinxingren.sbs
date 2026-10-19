import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PageSEO } from '../components/PageSEO';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-body font-sans flex flex-col selection:bg-brand-primary/25 selection:text-brand-text-heading">
      <PageSEO />
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
