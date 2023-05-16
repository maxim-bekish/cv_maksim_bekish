import React from "react";
import styles from "./header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Maksim Bekish</h1>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li className={`${styles.menuLinks} ${styles.menuLinksActive}`}>Intro</li>
          <li className={`${styles.menuLinks}`}>About</li>
          <li className={`${styles.menuLinks}`}>Works</li>
          <li className={`${styles.menuLinks}`}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
