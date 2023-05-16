import React from "react";
import styles from'./header.module.css'
const Header = function () {
  return (
    <header>
      <div>
        <h1 className={styles.testh1}>Maksim Bekish</h1>
      </div>
      <nav>
        <ul>
          <li>Intro</li>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
