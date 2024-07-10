import React from 'react';
import ParticleSystem from '../ParticleSystem';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#171819] scroll-smooth min-h-screen">
      <ParticleSystem />
      <div className="relative z-10">{children}</div>
      <style jsx global>{`
        #defaultCanvas0 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default Layout;
