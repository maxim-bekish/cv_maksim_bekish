import React from "react";

import photoMy from "../../png/photoMyTwo.png";
import { motion } from "framer-motion";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding-top: 45px;
  div:nth-child(1) {
    margin: 0px 0 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    h1 {
      font-family: "Gilroy-Bold";
      display: grid;
      justify-items: start;
      grid-area: 1 / 1 / 2 / 2;
      font-size: 1.63rem;
      line-height: 3rem;
    }
    p:nth-child(2) {
      font-family: "Gilroy-Medium";
      display: grid;
      justify-items: center;
      align-items: end;
      color: #070707;
      grid-area: 1 / 2 / 2 / 3;
      font-size: 1rem;
      line-height: 1rem;
    }
    div:nth-child(3) {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      .button-lang {
        font-family: "Gilroy-Bold";
        cursor: pointer;
        text-align: end;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        font-size: 14px;
        text-transform: uppercase;
        box-sizing: border-box;
        width: 50%;
        color: black;
        font-weight: 400;
      }
      .button-lang-active {
        color: black;
        font-weight: 400;
        background-position: 0 100%;
        background-size: 100% 3px;
        background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgb(0, 0, 0)
        );
        background-repeat: no-repeat;
        width: 50%;
        box-sizing: border-box;
        font-family: "Gilroy-Bold";
        cursor: pointer;
        text-align: end;
        background-color: rgba(0, 0, 0, 0);
        border: 0;
        font-size: 14px;
        text-transform: uppercase;
      }
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
      max-height: 500px;
    }
  }
  @media (max-width: 600px) {
    padding-top: 0px;
    .button-lang-active {
      width: 100% !important;
    }
    .button-lang {
      width: 100% !important ;
    }
  }
`;
const textAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: { x: 0, opacity: 1 },
};

const locales = {
  en: { title: "English" },
  ru: { title: "Русский" },
  by: { title: "Беларуский" },
};
console.log(locales);
const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.section id="home">
      <Wrapper>
        <div>
          <motion.h1
            transition={{ delay: 1.5, duration: 1 }}
            initial={textAnimation.hidden}
            animate={textAnimation.visible}
          >
            {t("main.home.name")}
          </motion.h1>
          <p> {t("main.home.about")}</p>
          <div>
            {Object.keys(locales).map((locale, id) => (
              <button
                className={`${
                  i18n.resolvedLanguage === locale
                    ? "button-lang-active"
                    : "button-lang"
                }`}
                key={`key-${locale}-${id}`}
                onClick={() => {
                  i18n.changeLanguage(locale);
                }}
              >
                {`${locales[locale].title}`}
              </button>
            ))}
          </div>
        </div>
        <div>
          <img src={photoMy} alt="I'm" />
        </div>
      </Wrapper>
    </motion.section>
  );
};
export default Home;
