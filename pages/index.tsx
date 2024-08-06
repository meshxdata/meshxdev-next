import React from 'react';
import Header from '../components/MainHeader';
import MainContent from '../components/MainContent';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col self-stretch pb-20 w-full bg-slate-50 max-md:max-w-full">
      <Header />
      <MainContent />
    </div>
  );
};

export default Index;