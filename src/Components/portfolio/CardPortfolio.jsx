import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const color = "#474747";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .btn {
    font-family: "Gilroy-Medium";
    display: inline-block;
    padding: 20px 30px;
    font-size: 26px;
    min-width: 200px;
    text-align: center;
    color: #000000;
    font-weight: 600;
    position: relative;
    text-decoration: none;
    transition: 0.3s;
    background-color: rgba(0, 0, 0, 0);
    border: none;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      border: 3px solid #565d6b;
      border-right: none;
      border-bottom: none;
      transition: transform 0.5s;
    }

    &:after {
      top: auto;
      left: auto;
      bottom: 0;
      right: 0;
      border: 3px solid #565d6b;
      border-left: none;
      border-top: none;
    }

    &:hover {
      /* background: #3d58bb3b; */
    }

    &:hover:before {
      transform: translate(-5px, -5px);
    }

    &:hover:after {
      transform: translate(5px, 5px);
    }
  }

  .btn-flip {
    padding: 1em 2em;
    border: 0.125em solid ${color};
    box-shadow: 0.5em 0.5em 0 -0.125em #fff, 0.5em 0.5em lighten(${color}, 35%);
    overflow: hidden;
    position: relative;
    color: ${color};
    font: 18px "Space Mono";
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s;
    &:after {
      content: "";
      background: ${color};
      width: 150%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transform: rotate(-45deg) translateY(-3em);
      transform-origin: 0% 100%;
      transition: 0.3s;
    }
    &:hover {
      color: #fff;
      box-shadow: 1em 1em 0 -0.125em #fff, 1em 1em lighten(${color}, 35%);
      &:after {
        transform: rotate(0deg);
      }
    }
  }

  .active {
    background-color: #e7e7ff80;
  }
  hr {
    background: #9e9e9e42;
    border: 0;
    margin: 0 0 15px 0;
    width: 100%;
    height: 1px;
  }
  .containerPortfolio {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 70px;
    .sectionLeft {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .sectionRight {
      .description {
        p {
          font-family: "Gilroy-Medium";
          margin-bottom: 15px;
        }
      }
      .img {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 700px) {
    .containerPortfolio {
      flex-direction: column;
      gap: 35px;
    }
  }
`;

const CardPortfolio = function ({ props }) {
  const [isActive, setIsActive] = useState(true);
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div>
        <a target="blanc" className="btn-flip" href={props.link}>
          {props.title}
        </a>
      </div>

      <div className="container containerPortfolio">
        <section className="sectionLeft">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`btn ${isActive ? "active" : ""}`}
          >
            {t("main.portfolio.sectionLeft.photo")}
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className={`btn ${isActive ? "" : "active"}`}
          >
            {t("main.portfolio.sectionLeft.description")}
          </button>
        </section>
        <section className="sectionRight">
          <div
            style={{ display: `${isActive ? "none" : "block"}` }}
            className="description"
          >
            {props.description.map((element, id) => {
              return <p id={`key-${id}`}>{element}</p>;
            })}
            <a target="blanc" href={props.link}>
              {t("main.portfolio.link")}
            </a>
          </div>
          <img
            style={{ display: `${isActive ? "block" : "none"}` }}
            className="img"
            src={props.url}
            alt="img"
          />
        </section>
      </div>
      <hr />
    </Wrapper>
  );
};

export default CardPortfolio;
