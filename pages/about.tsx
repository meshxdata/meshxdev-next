import React from 'react';
import Header from '../components/MainHeader';
import MainContent from '../components/MainContent';
import AboutPage from '../components/About';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch pb-20 w-full bg-slate-50 max-md:max-w-full">
      <Header />
      <AboutPage />
    </div>
  );
};

export default Index;