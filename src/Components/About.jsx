import React from "react";
import styles from "./about.module.css";
const About = function () {
  return (
    <div className={styles.aboutFon}>
      <div className={styles.about}>
        <h1>About me</h1>
        <p>
          Hi, I'm Maxim - FrontEnd developer from Minsk. I am interested in
          programming and everything related to it. <br /> I'm studying
          atcourses "Frontend-developer PRO" in Skillfactory. <br /> Ready to
          implement excellent projects with wonderful people.</p>
      </div>
    </div>
  );
};
export default About;
