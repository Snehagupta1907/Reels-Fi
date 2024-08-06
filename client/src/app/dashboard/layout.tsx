// app/(dashboard)/layout.tsx
import React from 'react';
import Header from '../components/Header';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
