import React from 'react';
import { LogProvider } from '@/providers/log-provider';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LogProvider>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation */}
        <TopNavigation />

        {/* Main content */}
        <main className="flex-grow overflow-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LogProvider>
  );
} 