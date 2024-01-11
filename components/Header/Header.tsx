import React from 'react';
import Link from 'next/link';
import styles from "./Header.module.css"
const Header = () => {
  return (
    <header className={`${styles.headerWrapper} ${styles.logo}`}>
      <Link href='/' passHref>
        <h1 className={styles.logo}>AnimXer</h1> {/* Replace with your actual logo */}
      </Link>
    </header>
  );
};

export default Header;
