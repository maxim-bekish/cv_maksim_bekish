import React from "react";
import styles from "./about.module.css";
const About = function () {
  return (
    <div id="abaut" className={styles.aboutFon}>
      <div className="container" >
        <div className={styles.about}>
          <h2>About me</h2>
          <p>
            Hi, I'm Maxim - FrontEnd developer from Minsk. <br />I am interested
            in programming and everything related to it. <br /> <br /> I'm
            studying at courses "Frontend-developer PRO" in SkillFactory.
            <br /> <br /> Ready to implement excellent projects with wonderful
            people.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
