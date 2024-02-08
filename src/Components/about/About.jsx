import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 0 0 100vmax #f6f6f6;
  clip-path: inset(0-100vmax);
  padding: 80px 0;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-top: 17px;
    font-family: "Gilroy-Medium";
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

const About = function () {
  const { t } = useTranslation();
  return (
    <Wrapper id="about">
      <div>
        <h2>{t("header.about")}</h2>
        <p>
          {t("main.about.a")} <br />
          {t("main.about.b")} <br />
          {t("main.about.c")} <br />
          {t("main.about.d")} <br />
          {t("main.about.e")}
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
