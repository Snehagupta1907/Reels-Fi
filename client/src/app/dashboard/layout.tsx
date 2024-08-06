// app/(dashboard)/layout.tsx
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar/index';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar/>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
