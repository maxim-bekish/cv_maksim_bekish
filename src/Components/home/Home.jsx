import React from "react";

import photoMy from "../../png/photoMyTwo.png";
import { motion } from "framer-motion";

import styled from "styled-components";

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
      p {
        font-family: "Gilroy-Bold";
        cursor: pointer;
        text-align: end;
        text-transform: uppercase;
      }
      div {
        height: 2px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(0, 0, 0, 1) 150%,
          rgba(0, 0, 0, 1) 100%
        );
        width: 150px;
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
    .allLang {
      display: none;
    }
    .allHome_info {
      margin: 0;
      gap: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
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

const Home = () => {
  return (
    <motion.section id="home">
      <Wrapper>
        <div>
          <motion.h1
            transition={{ delay: 1.5, duration: 1 }}
            initial={textAnimation.hidden}
            animate={textAnimation.visible}
          >
            Maksim Bekish
          </motion.h1>

          <p>FrontEnd developer 26 years old, Minsk</p>
          <div>
            <p>blr</p>
            <div></div>
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
