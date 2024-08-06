import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center bg-slate-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;