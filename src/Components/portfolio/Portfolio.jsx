import React from "react";
import CardPortfolio from "./CardPortfolio";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f6f6f6;
  padding: 80px 0 0 0;
  box-shadow: 0 0 0 100vmax #f6f6f6;
  clip-path: inset(0-100vmax);

  h2 {
    margin: 0 0 50px 0;
  }
  div {
    display: flex;
    gap: 40px;
    flex-direction: column;
  }
`;

const portfolio = {
  designProject: {
    title: `IC "Repair Design Project"`,
    link: "https://maxim-bekish.github.io/design-studio/",
    url: require(`../../png/dising.png`),
  },
  youTalk: {
    title: `YouTalk`,
    link: "https://maxim-bekish.github.io/youtalk/",
    url: require(`../../png/youtalk.png`),
  },
  chart: {
    title: `Chart (React)`,
    link: "https://test-maxim-bekish.vercel.app/",
    url: require(`../../png/chart.png`),
  },
  snack: {
    title: `Snack (Game)`,
    link: "https://snack-js.vercel.app/",
    url: require(`../../png//snack.png`),
  },
};

const Portfolio = function () {
  return (
    <Wrapper id="portfolio" >
      <h2 >Portfolio</h2>
      <div >
        <CardPortfolio props={portfolio.designProject} />
        <CardPortfolio props={portfolio.youTalk} />
        <CardPortfolio props={portfolio.chart} />
        <CardPortfolio props={portfolio.snack} />
      </div>
    </Wrapper>
  );
};

export default Portfolio;
