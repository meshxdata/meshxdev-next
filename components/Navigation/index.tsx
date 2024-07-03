import React from 'react';
import Image from 'next/image';
import styles from './navigation.module.css';

const NavBanner: React.FC = () => {
  return (
    <div className="bg-[#171819] md:p-4 p-2">
      <div className={styles.navRectangle}></div>
    </div>
  );
};

export default NavBanner;