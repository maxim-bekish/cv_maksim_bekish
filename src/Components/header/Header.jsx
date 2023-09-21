import React, { useState } from "react";

import { motion } from "framer-motion";
import styled from "styled-components";

function Header() {
  const [active, setActive] = useState(true);
  const Wrapper = styled.header`
    padding-top: 15px;

    div {
      nav {
        justify-content: space-between;
        gap: 15px;
        li {
          list-style-type: none;
          text-align: end;
          a {
            font-size: 1.2rem;
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
        height: ${active ? "100vh" : "40px"};
        background: ${active
          ? "linear-gradient(90deg,rgba(255, 255, 255, 0) 0%,rgb(187 191 194 / 35%) 10%,rgb(141 149 153 / 73%) 23%,rgb(89 101 107 / 78%) 39%,rgb(26 43 51 / 81%) 64%,rgb(26 43 51 / 98%) 90%,rgba(26, 43, 51, 1) 100%)"
          : "none"};
        /* display: ${active ? "flex" : "none"}; */
        justify-content: space-between;
        box-shadow: ${active ? "20px 0 0 2vmax rgba(26, 43, 51, 1)" : "none"};

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
          width: 30px;
          height: 35px;
          position: relative;
          z-index: 2;
          overflow: hidden;

          span {
            width: 50px;
            height: 4px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #222222;
            transition: all 0.5s;
          }

          span:nth-of-type(2) {
            top: calc(50% - 10px);
          }
          span:nth-of-type(3) {
            top: calc(50% + 10px);
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
