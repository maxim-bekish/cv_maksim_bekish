import React from "react";
import CardPortfolio from "./CardPortfolio";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div`
  background: #f6f6f6;
  padding: 40px 0;
  box-shadow: 0 0 0 100vmax #f6f6f6;
  clip-path: inset(0-100vmax);

  h2 {
    font-size: 35px;
    margin: 0 0 50px 0;
  }
  div {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;
const Portfolio = function () {
  const { t } = useTranslation();
  const portfolio = {
    todo: {
      title: `${t("main.portfolio.dataTable.name")}`,
      link: "https://to-do-app-chi-eight.vercel.app/",
      url: require(`../../png/todoList.png`),
      description: [
        `${t("main.portfolio.dataTable.description.a")}`,
        `${t("main.portfolio.dataTable.description.b")}`,
        `${t("main.portfolio.dataTable.description.c")}`,
        `${t("main.portfolio.dataTable.description.d")}`,
        `${t("main.portfolio.dataTable.description.e")}`,
        `${t("main.portfolio.dataTable.description.f")}`,
      ],
    },
    snack: {
      title: `${t("main.portfolio.snake.name")}`,
      link: "https://snack-js.vercel.app/",
      url: require(`../../png//snack.png`),
      description: [
        `${t("main.portfolio.snake.description.a")}`,
        `${t("main.portfolio.snake.description.b")}`,
        `${t("main.portfolio.snake.description.c")}`,
        `${t("main.portfolio.snake.description.d")}`,
        `${t("main.portfolio.snake.description.e")}`,
        `${t("main.portfolio.snake.description.f")}`,
      ],
    },
    designProject: {
      title: `${t("main.portfolio.designProject.name")}`,
      link: "https://maxim-bekish.github.io/design-studio/",
      url: require(`../../png/dising.png`),
      description: [
        `${t("main.portfolio.designProject.description.a")}`,
        `${t("main.portfolio.designProject.description.b")}`,
        `${t("main.portfolio.designProject.description.c")}`,
        `${t("main.portfolio.designProject.description.d")}`,
        `${t("main.portfolio.designProject.description.e")}`,
      ],
    },
    chart: {
      title: `${t("main.portfolio.chart.name")}`,
      link: "https://test-maxim-bekish.vercel.app/",
      url: require(`../../png/chart.png`),
      description: [
        `${t("main.portfolio.chart.description.a")}`,
        `${t("main.portfolio.chart.description.b")}`,
        `${t("main.portfolio.chart.description.c")}`,
        `${t("main.portfolio.chart.description.d")}`,
      ],
    },
    youTalk: {
      title: `${t("main.portfolio.youTalk.name")}`,
      link: "https://maxim-bekish.github.io/youtalk/",
      url: require(`../../png/youtalk.png`),
      description: [
        `${t("main.portfolio.youTalk.description.a")}`,
        `${t("main.portfolio.youTalk.description.b")}`,
        `${t("main.portfolio.youTalk.description.c")}`,
        `${t("main.portfolio.youTalk.description.d")}`,
      ],
    },
  };

  return (
    <Wrapper id="portfolio">
      <h2>{t("header.portfolio")}</h2>
      <div>
        <CardPortfolio props={portfolio.todo} />
        <CardPortfolio props={portfolio.snack} />
        <CardPortfolio props={portfolio.designProject} />
        <CardPortfolio props={portfolio.chart} />
        <CardPortfolio props={portfolio.youTalk} />
      </div>
    </Wrapper>
  );
};

export default Portfolio;
