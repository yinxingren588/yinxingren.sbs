import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text-body font-sans flex flex-col selection:bg-brand-primary/20 selection:text-brand-text-heading">
      <Outlet />
    </div>
  );
};
