import React from "react";

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
  return (
    <Wrapper id="about">
      <div>
        <h2>About me</h2>
        <p>
          Я обучаюсь в SF. <br />В свободное
          время вместе с командой реализуем свой проект. <br /> Мне интересно
          создание веб-приложений с использованием
          JavaScript/TypeScript и React. <br /> Я коммуникабелен, стремлюсь к
          постоянному развитию и адаптируюсь к новым технологиям. <br />
          Готов брать на себя ответственность и способствовать развитию проектов
          и компаний.
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
