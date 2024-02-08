import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Wrapper = styled.div`
  padding: 50px 0;
  section {
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div:nth-child(1) {
      box-sizing: border-box;
      margin-top: 40px;
      text-align: center;
      div {
        display: flex;
        justify-content: center;

        a {
          display: block;
          border: 0;

          background: white;
          border-radius: 20px;
          width: 180px;
          line-height: 2.5rem;
          color: #070707;
          text-decoration: none;
          font-family: "Gilroy-Bold";
          letter-spacing: 1.25px;
          transition: all ease 350ms;
          border: 3px solid black;
          &:hover {
            color: white;
            background: #0707071c;
          }
          &:active {
            background: white;
            border: 3px solid white;
          }
        }
      }
      p {
        font-family: "Gilroy-Medium";
        color: #070707;
        margin: 0 0 30px 0;
      }
    }
    div:nth-child(2) {
      text-align: center;
      div:nth-child(1) {
        height: 60px;
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        a {
          margin-top: 0px;
          border-bottom: 0;
          transition: all ease 350ms;

          &:hover {
            margin-top: -7px;
            border-bottom: 9px solid black;
            border-radius: 40px;
          }
        }
      }
      div:nth-child(2) {
        p {
          color: #828282;
          font-size: 0.78rem;
          line-height: 0.81rem;
          margin-top: 10px;
        }
        a {
          text-decoration: none;
          color: #828282;
          font-size: 0.78rem;
          line-height: 0.81rem;
          &:hover {
            color: black;
          }
        }
      }
    }
  }
`;

const arrayContacts = [
  {
    text: "GitHub",
    logo: require(`./../../svg/github.svg`),
    link: "https://github.com/maxim-bekish",
  },
  {
    text: "Linkedin",
    logo: require(`./../../svg/linkedin.svg`),
    link: "https://www.linkedin.com/in/maksim-bekish-819b8920a/",
  },
  // {
  //   text: "CodePen",
  //   logo: require(`./../../svg/codePen.svg`),
  //   link: "https://codepen.io/maxamax97",
  // },
  {
    text: "Instagram",
    logo: require(`./../../svg/instagram.svg`),
    link: "https://www.instagram.com/it_maxa_max/",
  },
  {
    text: "Telegram",
    logo: require(`./../../svg/telegram.svg`),
    link: "https://t.me/maxa_max",
  },
];
const Contacts = function () {
  const { t } = useTranslation();

  return (
    <Wrapper id="contacts">
      <h2>{t("header.contacts")}</h2>
      <section>
        <div>
          <p>
            {t("footer.title")}
            <br />
          </p>
          <div>
            <a target="blanck" href="https://t.me/maxa_max">
              {t("footer.button")}
            </a>
          </div>
        </div>
        <div>
          <div>
            {arrayContacts.map((el) => {
              return (
                <a target="blanc" href={el.link}>
                  <img src={el.logo} title={el.name} alt={el.name} />
                </a>
              );
            })}
          </div>
          <div>
            <a target="blanc" href="mailto:maxamax997@gmail.com">
              maxamax997@gmail.com
            </a>

            <p> {t("footer.end")}</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contacts;
