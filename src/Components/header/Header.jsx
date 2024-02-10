import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const Wrapper = styled.header`
    /* padding-top: 35px; */
    position: fixed;
    z-index: 2;
    left: 0px;
    background-color: #ffffffb8;
    width: 100%;

    div {
      /* display: none; */
      padding: 12px 0;
      max-width: 1250px;
      margin: 0 auto;
      nav {
        /* max-width: 1250px; */
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 15px;

        li {
          list-style-type: none;
          text-align: end;
          flex-shrink: 1;
          a {
            font-size: 2rem;
            color: #3e505a;
            font-family: "Gilroy-Bold";
            line-height: 22.28px;
            text-decoration: none;
            white-space: nowrap;
          }
        }
      }
      div {
        display: none;
      }
    }
    @media all and (max-width: 600px) {
      display: ${active ? "block" : "flex"};
      justify-content: flex-end;
      margin-bottom: ${active ? "0px" : "-40px"};
      background-color: rgba(0, 0, 0, 0);
      div {
        padding-top: 0px;
        position: static;
        height: ${active ? "100vh" : "35px"};
        background: ${active
          ? "linear-gradient(90deg,rgb(187 191 194 / 78%) 0%,rgb(187 191 194 / 80%) 10%,rgb(141 149 153 / 90%) 23%,rgb(89 101 107 / 92%) 39%,rgb(26 43 51 / 88%) 64%,rgb(26 43 51) 90%,rgba(26, 43, 51, 1) 100%)"
          : "none"};

        justify-content: space-between;
        box-shadow: ${active ? "20px 0 0 2vmax rgba(26, 43, 51, 1)" : "none"};
        margin: 0px;
        clip-path: inset(0-100vmax);

        nav {
          display: ${active ? "flex" : "none"};
          flex-direction: column;
          align-items: end;
          gap: 0px;
          padding-top: 20px;
          height: 65vh;
          li {
            margin-right: 20px;

            a {
              font-size: 3rem !important;
              color: #969ea3;
            }
          }
        }
        div {
          display: block;
          background: rgba(255, 0, 0, 0);
          box-shadow: ${active ? "20px 0 0 0vmax rgba(255, 0, 0, 0)" : "none"};
          width: 35px;
          height: 35px;
          position: relative;
          z-index: 2;
          top: ${active ? "25px" : "11px"};
          left: ${active ? "25px" : "-20px"};
          overflow: hidden;

          span {
            width: 30px;
            height: 4px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #353b46;
            /* background-color: ${active ? "#adb6c6" : "#adb6c6"}; */
            transition: all 0.5s;

            &:nth-of-type(1) {
              display: ${active ? "none" : "block"};
              top: ${active ? "50%" : "calc(50% - 10px)"};
              transform: ${active
                ? "translate(-50%, 0%) rotate(45deg)"
                : " translate(-50%, -50%)"};
            }
            &:nth-of-type(2) {
              top: ${active ? "50%" : "calc(50% )"};
              transform: ${active
                ? "translate(-50%, 0%) rotate(45deg)"
                : " translate(-50%, -50%)"};
            }
            &:nth-of-type(3) {
              top: ${active ? "50%" : "calc(50% + 10px)"};

              transform: ${active
                ? "translate(-50%, 0%) rotate(-45deg)"
                : " translate(-50%, -50%)"};
            }
          }
        }
      }
    }
  `;
  const headerTitle = [
    {
      value: t("header.home"),
      href: "#home",
    },
    {
      value: t("header.about"),
      href: "#about",
    },
    {
      value: t("header.skills"),
      href: "#skills",
    },
    {
      value: t("header.portfolio"),
      href: "#portfolio",
    },
    {
      value: t("header.contacts"),
      href: "#contacts",
    },
  ];
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <Wrapper>
      <motion.div>
        <div onClick={() => setActive(!active)} id="burgerButton">
          <span key="key-1"></span>
          <span key="key-2"></span>
          <span key="key-3"></span>
        </div>
        <nav>
          {headerTitle.map((el, item) => (
            <motion.li
              onClick={() => setActive(!active)}
              whileHover={{
                scale: 1.1,
              }}
              initial={listVariants.hidden}
              animate={listVariants.visible(item)}
              key={`key-${item}`}
            >
              <a href={el.href}>{el.value}</a>
            </motion.li>
          ))}
        </nav>
      </motion.div>
    </Wrapper>
  );
}
export default Header;
