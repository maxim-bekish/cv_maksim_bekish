import React from "react";
import github from "../../svg/github.svg";
import codepen from "../../svg/codepen.svg";
import instagram from "../../svg/instagram.svg";
import linkedin from "../../svg/linkedin.svg";
import styled from "styled-components";

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

const Contacts = function () {
  return (
    <Wrapper id="contacts">
      <h2>Contacts</h2>
      <section>
        <div>
          <p>
            Want to know more or just chat? <br /> You are welcome!
          </p>
          <div>
            <a target="blanck" href="https://t.me/maxa_max">
              Send message
            </a>
          </div>
        </div>
        <div>
          <div>
            <a target="blanc" href="https://github.com/maxim-bekish">
              <img src={github} title="github" alt="github" />
            </a>
            <a
              target="blanc"
              href="https://www.linkedin.com/in/maksim-bekish-819b8920a/"
            >
              <img src={linkedin} title="linkedin" alt="linkedin" />
            </a>
            <a target="blanc" href="https://codepen.io/maxamax97">
              <img src={codepen} title="codepen" alt="codepen" />
            </a>
            <a target="blanc" href="https://www.instagram.com/it_maxa_max/">
              <img src={instagram} title="instagram" alt="instagram" />
            </a>
          </div>
          <div>
            <a target="blanc" href="mailto:maxamax997@gmail.com">
              maxamax997@gmail.com
            </a>
            <p>I am also waiting for you in my social networks.</p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Contacts;
