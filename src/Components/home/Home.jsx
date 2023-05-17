import React from "react";
import styles from "./home.module.css";
import photoMy from "../../png/photoMyTwo.png";
import { motion } from "framer-motion";

const textAnimation = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

const Home = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" id="home">
      <div className="container">
        <div className={styles.allHome}>
          <div className={styles.allHome_info}>
            <div className={styles.h1}>
              <motion.h1 variants={textAnimation}>
                Maksim <br /> Bekish
              </motion.h1>
            </div>
            <div className={styles.p}>
              <p>
                FrontEnd developer <br /> 26 years old, Minsk
              </p>
            </div>
            <div className={styles.wrapLeng}>
              <div className={styles.allLang}>
                <div className={`${styles.lang} ${styles.lang_active}`}>
                  blr
                </div>
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
    </motion.section>
  );
};
export default Home;
