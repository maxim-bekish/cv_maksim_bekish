import React from "react";
import styles from "./portfolio.module.css";








const CardPortfolio = function (props) {
  console.log(props);
  return (
    <div className={styles.card}>
      <a className={styles.link} target="blanc" href={props.props.link}>
        {props.props.title}
      </a>
      <hr className={styles.line} />
      <img className={styles.imgPortfolio} src={props.props.url} alt="img" />
    </div>
  );
};

export default CardPortfolio;
