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
      <div >
        <h2>About me</h2>
        <p>
          Hi, I'm Maxim - FrontEnd developer from Minsk. <br />I am interested
          in programming and everything related to it. <br /> <br /> I'm
          studying at courses "Frontend-developer PRO" in SkillFactory.
          <br /> <br /> Ready to implement excellent projects with wonderful
          people.
        </p>
      </div>
    </Wrapper>
  );
};
export default About;
