import React from "react";
import styles from "./portfolio.module.css";
import dising from "../../png/dising.png";
import chart from "../../png/chart.png";
import youTalk from "../../png/youtalk.png";

const Portfolio = function () {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.allcard}>
          <div className={styles.card}>
            <a
              className={styles.link}
              target="blanc"
              href="https://maxim-bekish.github.io/design-studio/"
            >
              IC "Repair Design Project"
            </a>
            <hr className={styles.line} />
            <img className={styles.imgPortfolio} src={dising} alt="" />
          </div>

          <div className={styles.card}>
            <a
              className={styles.link}
              target="blanc"
              href="https://maxim-bekish.github.io/youtalk/"
            >
              YouTalk
            </a>
            <hr className={styles.line} />
            <img className={styles.imgPortfolio} src={youTalk} alt="" />
          </div>

          <div className={styles.card}>
            <a
              className={styles.link}
              target="blanc"
              href="https://test-maxim-bekish.vercel.app/"
            >
              Chart (React)
            </a>
            <hr className={styles.line} />
            <img className={styles.imgPortfolio} src={chart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
