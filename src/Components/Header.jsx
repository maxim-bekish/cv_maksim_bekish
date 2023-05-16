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
              <li className={`${styles.menuLinks}`}>About my</li>
              <li className={`${styles.menuLinks}`}>Skills</li>
              <li className={`${styles.menuLinks}`}>Portfolio</li>
              <li className={`${styles.menuLinks}`}>Contacts</li>
            </ul>
          </nav>
        </div>
        <hr className="hr" />
      </div>
    </header>
  );
};
export default Header;
