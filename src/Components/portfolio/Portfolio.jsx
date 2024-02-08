import React from "react";
import CardPortfolio from "./CardPortfolio";
import styled from "styled-components";

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

const portfolio = {
  todo: {
    title: `To-do list(react)`,
    link: "https://to-do-app-chi-eight.vercel.app/",
    url: require(`../../png/todoList.png`),
    description: [
      "React и функциональные компоненты для чистого и компактного кода.",
      "Верстка соответствует макету, использование стандартных SCSS правил и styled-components для стилизации",
      "Кастомизация елементов библиотеки  Ant Design для создания удобного интерфейса.",
      "Возможность выбора между дневной и ночной темой через useContext.",
      "Работа с различными типами данных: текстовыми, числовыми, выпадающим списком и чекбоксами с соответствующими компонентами.",
      "Сложность заключалась в реализации тем(день/ночь). Решил с помощью styled-components, useState и useContext ",
 
    ],
  },
  snack: {
    title: `Snake (Game)`,
    link: "https://snack-js.vercel.app/",
    url: require(`../../png//snack.png`),
    description: [
      "Использование элемента <canvas> для создания игрового поля.",
      "HTML и CSS для основной структуры и визуального оформления",
      "JavaScript для управления логикой и визуализацией игры.",
      "Добавление функционала, настройки скорости змейки c помощью JavaScript",
      "Использование локального хранилища браузера для сохранения имени игрока и лучшего результата",
      "Сложность возникла с управлением жизненного цикла игры. Решение было таким. Функция run() отвечает за начало игры. Запускает таймер обратного отсчета перед началом игры и вызывает функцию gameLoop() после завершения обратного отсчета. Функция gameLoop() основной игровой цикл, который обновляет и отображает игровые элементы с определенной частотой. Вызывается после завершения таймера обратного отсчета. Использует requestAnimationFrame для повторного вызова себя и обновления состояния игры. Обработчики событий клавиатуры реагируют на нажатия клавиш и изменяют направление движения змейки.",
    ],
  },
  designProject: {
    title: `IC "Repair Design Project"`,
    link: "https://maxim-bekish.github.io/design-studio/",
    url: require(`../../png/dising.png`),
    description: [
      "Верстка выполнена в соответствии с макетом из Figma, а для стилизации элементов использовал SCSS",
      "Создал формы для ввода данных и отправки на сервер",
      "Для обеспечения адаптивности сайта использовал семантические теги и медиа-запросы.",
      "Реализовал слайдер для фотографий и информации на JavaScript",
      "При создании слайдера на JavaScript возникали трудности с управлением перемещением слайдов, синхронизацией элементов и обработкой событий нажатия. Я использовал методы работы с DOM, CSS свойство transform для анимации, массивы и циклы для управления элементами и обработчики событий для навигации",
    ],
  },
  chart: {
    title: `Chart (React)`,
    link: "https://test-maxim-bekish.vercel.app/",
    url: require(`../../png/chart.png`),
    description: [
      "Функциональные компоненты в React: Улучшение модульности и читаемости кода.",
      "Семантические теги в верстке: Повышение доступности сайта и улучшение SEO.",
      "Интеграция SVG-графики: Добавление привлекательных визуальных элементов.",
      "JavaScript и SVG для интерактивности: Улучшение пользовательского опыта и функциональности приложения.",
    ],
  },
  youTalk: {
    title: `YouTalk`,
    link: "https://maxim-bekish.github.io/youtalk/",
    url: require(`../../png/youtalk.png`),
    description: [
      "При верстке проекта использовал макет Figma. Чистый CSS с применением техник, таких как гриды и флексбокс.",
      "Использованию семантических тегов, таких как <header>, <nav>, <section>, <article>, <footer>, что бы код был понятен и легко читаемой как для разработчиков, так и для поисковых систем.",
      "Использование гридов и флексбокса позволило мне создать адаптивную верстку. Использовал псевдоклассы, чтобы добавить интерактивные эффекты.",
      "В результате моя верстка адаптирована под все устройства и предоставляетприятный и интуитивно понятный интерфейс.",
    ],
  },
};

const Portfolio = function () {
  return (
    <Wrapper id="portfolio">
      <h2>Portfolio</h2>
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
