import React from 'react';
import Header from '../components/MainHeader';
import CookiesPolicyPage from '../components/ContentPages/pages/CookiesPolicyPage';

const Index: React.FC = () => {
  return (
    <div className="">
      <Header />
      <CookiesPolicyPage />
    </div>
  );
};

export default Index;