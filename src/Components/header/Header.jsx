import React from "react";
import styles from "./header.module.css";

const Header = function () {
document.body.addEventListener("scroll", function(){
  console.log('12')
})

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <a
                  className={`${styles.menuLinks} ${styles.menuLinksActive}`}
                  href="#home"
                >
                  home
                </a>
              </li>
              <li>
                <a className={`${styles.menuLinks}`} href="#about">
                  About me
                </a>
              </li>
              <li>
                <a className={`${styles.menuLinks}`} href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className={`${styles.menuLinks}`} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className={`${styles.menuLinks}`} href="#contacts">
                  Contacts
                </a>
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
