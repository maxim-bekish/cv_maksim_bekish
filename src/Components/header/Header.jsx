import React from "react";
import styles from "./header.module.css";
import { motion } from "framer-motion";

const Header = function () {
  const headerTitle = [
    {
      value: "Home",
      href: "#home",
      className: `${styles.menuLinks}`,
    },
    {
      value: "About me",
      href: "#about",
      className: `${styles.menuLinks}`,
    },
    {
      value: "Skills",
      href: "#skills",
      className: `${styles.menuLinks}`,
    },
    {
      value: "Portfolio",
      href: "#portfolio",
      className: `${styles.menuLinks}`,
    },
    {
      value: "Contacts",
      href: "#contacts",
      className: `${styles.menuLinks}`,
    },
  ];
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <nav className={styles.navigation}>
            {headerTitle.map((el, item) => (
              <motion.li
                whileHover={{
                  scale: 1.1,
                }}
                initial={listVariants.hidden}
                animate={listVariants.visible(item)}
              >
                <a className={el.className} href={el.href}>
                  {el.value}
                </a>
              </motion.li>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
