import React from "react";
import styles from "./contact.module.css";
import github from "../../svg/github.svg";
import codepen from "../../svg/codepen.svg";
import instagram from "../../svg/instagram.svg";
import linkedin from "../../svg/linkedin.svg";

const Contacts = function () {
  return (
    <div id="contacts" className={styles.contacts}>
      <div className="container">
        <h2>Contacts</h2>
        <div className={styles.allcontent}>
          <div className={styles.appeal}>
            <p>
              Want to know more or just chat? <br /> You are welcome!
            </p>
            <div>
              <a target="blanck" href="https://t.me/maxa_max">
                Send message
              </a>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.allsvg}>
              <a target="blanc"  href="https://github.com/maxim-bekish">
                <img src={github} title="github" alt="github" />
              </a>
              <a target="blanc"  href="https://www.linkedin.com/in/maksim-bekish-819b8920a/">
                <img src={linkedin} title="linkedin" alt="linkedin" />
              </a>
              <a target="blanc"  href="https://codepen.io/maxamax97">
                <img src={codepen} title="codepen" alt="codepen" />
              </a>
              <a target="blanc"  href="https://www.instagram.com/">
                <img src={instagram} title="instagram" alt="instagram" />
              </a>
            </div>
            <div className={styles.appealNetwork}>
              <p>I am also waiting for you in my social networks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
