import React from "react";
import styles from "./header.module.css";

const Header = function () {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <nav className={styles.navigation}>
            <ul>
              <li className={`${styles.menuLinks} ${styles.menuLinksActive}`}>
                Home
              </li>
              <li className={`${styles.menuLinks}`}>
                <a href="#abaut">About my</a>
              </li>
              <li className={`${styles.menuLinks}`}>
                <a href="#skills">Skills</a>
              </li>
              <li className={`${styles.menuLinks}`}>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className={`${styles.menuLinks}`}>
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="hr" />
      </div>
    </header>
  );
};
export default Header;
