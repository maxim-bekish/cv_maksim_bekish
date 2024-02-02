import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

function Header() {
  const [active, setActive] = useState(false);

  const Wrapper = styled.header`
    /* padding-top: 35px; */
    position: fixed;
    z-index: 2;
    left: 0px;
    background-color: white;
    width: 100%;

    div {
      padding-top: 25px;
      max-width: 1250px;
      /* width: 100%; */
      /* height: 60px; */
 
      /* z-index: 5; */
      /* background-color: white; */
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
            color: #a0acb3;
            font-family: "Gilroy-Bold";
            line-height: 22.28px;
            text-decoration: none;
            white-space: nowrap;
          }
        }
      }
    }
    @media all and (max-width: 600px) {
      display: ${active ? "block" : "flex"};
      justify-content: flex-end;
      padding-top: 0;
      margin-bottom: ${active ? "0px" : "-40px"};
      div {
        position: static;
        height: ${active ? "100vh" : "35px"};
        background: ${active
          ? "linear-gradient(90deg,rgba(255, 255, 255, 0) 0%,rgb(187 191 194 / 35%) 10%,rgb(141 149 153 / 73%) 23%,rgb(89 101 107 / 78%) 39%,rgb(26 43 51 / 81%) 64%,rgb(26 43 51 / 98%) 90%,rgba(26, 43, 51, 1) 100%)"
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

          a {
            font-size: 3rem !important;
          }
        }
        div {
          background: rgba(255, 0, 0, 0);
          box-shadow: ${active ? "20px 0 0 0vmax rgba(255, 0, 0, 0)" : "none"};
          width: 35px;
          height: 35px;
          position: relative;
          z-index: 2;
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
      value: "Home",
      href: "#home",
    },
    {
      value: "About me",
      href: "#about",
    },
    {
      value: "Skills",
      href: "#skills",
    },
    {
      value: "Portfolio",
      href: "#portfolio",
    },
    {
      value: "Contacts",
      href: "#contacts",
    },
  ];
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
      },
    }),
    hidden: {
      opacity: 0,
      y: 100,
    },
  };

  return (
    <Wrapper>
      <motion.div>
        <div onClick={() => setActive(!active)} id="burgerButton">
          <span></span>
          <span></span>
          <span></span>
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
