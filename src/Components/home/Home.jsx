import React from "react";
import styles from "./home.module.css";
import photoMy from "../../png/photoMyTwo.png";
const Home = function () {
  return (
    <div className="container">
      <div className={styles.allHome}>
        <div className={styles.allHome_info}>
          <div className={styles.h1}>
            <h1>
              Maksim <br /> Bekish
            </h1>
          </div>
          <div className={styles.p}>
            <p>
              FrontEnd developer <br /> 26 years old, Minsk
            </p>
          </div>
          <div className={styles.span}>
            <div className={styles.allLang}>
              <div className={`${styles.lang} ${styles.lang_active}`}>blr</div>
              <div className={styles.lang}>eng</div>
              <div className={styles.lang}>rus</div>
            </div>
          </div>
        </div>
        <div className={styles.allHome_photo}>
          <img src={photoMy} alt="I'm" />
        </div>
      </div>
    </div>
  );
};
export default Home;
