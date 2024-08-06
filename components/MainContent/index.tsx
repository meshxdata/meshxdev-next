import React from 'react';
import HeroSection from './HeroSection';
import LearnMoreButton from './LearnMoreButton';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col self-center mt-24 mb-7 w-full max-w-[1586px] max-md:mt-10 max-md:max-w-full">
      <div className="px-px max-md:max-w-full">
        <HeroSection />
      </div>
      <LearnMoreButton />
    </main>
  );
};

export default MainContent;