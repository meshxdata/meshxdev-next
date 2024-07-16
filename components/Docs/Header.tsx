import React from "react";
import { SignedIn, SignedOut, UserButton, SignIn } from "@clerk/nextjs";
import { ClerkProvider } from "@clerk/nextjs";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <ClerkProvider>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b600c0455658c2f96bf2ce3f806b78defc2268ae1dab94c1e3dfac9321aca5?apiKey=ccbd9f716d3746849ccb6bd0200e2166&"
            alt="Encyclopedia Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>Encyclopedia</h1>
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </ClerkProvider>
  );
};

export default Header;
