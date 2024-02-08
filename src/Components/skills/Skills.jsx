import React from "react";
import svgJS from "../../svg/icons8-js.svg";
import svgTS from "../../svg/icons8-typescript.svg";
import svgCSS from "../../svg/icons8-css.svg";
import svgREACT from "../../svg/icons8-react-native.svg";
import svgHTML from "../../svg/icons8-html5.svg";
import svgSASS from "../../svg/icons8-sass.svg";
import svgWEBPACK from "../../svg/icons8-webpack.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding: 80px 0;
  h2 {
    margin: 0px 0 60px 0;
  }

  div {
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      span {
        font-family: "Gilroy-Bold";
        color: #828282;
      }
    }
  }
`;

const skills = [
  { name: "Java Script", logo: svgJS },
  { name: "Type Script", logo: svgTS },
  { name: "CSS", logo: svgCSS },
  { name: "SCSS", logo: svgSASS },
  { name: "React", logo: svgREACT },
  { name: "HTML5", logo: svgHTML },
  { name: "WebPack", logo: svgWEBPACK },
];

const Skills = function () {
    const { t } = useTranslation();
  return (
    <Wrapper id="skills">
      <h2>{t("header.skills")}</h2>
      <div>
        {skills.map((el, id) => (
          <div id={`${el.name}-${id}`}>
            <span>{el.name}</span>
            <motion.img
              whileHover={{
                scale: 1.2,
              }}
              src={el.logo}
              alt={el.name}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Skills;
