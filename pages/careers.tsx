import React from 'react';
import Header from '../components/MainHeader';
import CareerPage from '../components/Careers/careers/CareerPage';
import Footer from '../components/MainFooter/Footer';

const Index: React.FC = () => {
  return (
    <div className="">
      <Header />
      <CareerPage />
      <Footer />
    </div>
  );
};

export default Index;