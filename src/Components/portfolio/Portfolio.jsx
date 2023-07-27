import React from "react";
import styles from "./portfolio.module.css";
import CardPortfolio from "./CardPortfolio";

const portfolio = {
  designProject: {
    title: `IC "Repair Design Project"`,
    link: "https://maxim-bekish.github.io/design-studio/",
    url: require(`../../png/dising.png`),
  },
  youTalk: {
    title: `YouTalk`,
    link: "https://maxim-bekish.github.io/youtalk/",
    url: require(`../../png/youtalk.png`),
  },
  chart: {
    title: `Chart (React)`,
    link: "https://test-maxim-bekish.vercel.app/",
    url: require(`../../png/chart.png`),
  },
  snack: {
    title: `Snack (Game)`,
    link: "https://snack-js.vercel.app/",
    url: require(`../../png//snack.png`),
  },
};

const Portfolio = function () {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.title}>Portfolio</h2>
        <div className={styles.allcard}>
          <CardPortfolio props={portfolio.designProject} />
          <CardPortfolio props={portfolio.youTalk} />
          <CardPortfolio props={portfolio.chart} />
          <CardPortfolio props={portfolio.snack} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
