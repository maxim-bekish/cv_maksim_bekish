import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


    .img {
      max-width: 100%;
    }
  

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
      background: #3d58bb3b;
    }

    &:hover:before {
      transform: translate(-5px, -5px);
    }

    &:hover:after {
      transform: translate(5px, 5px);
    }
  }
  hr {
    background: #9e9e9e42;
    border: 0;
    margin: 0 0 15px 0;
    width: 100%;
    height: 1px;
  }
`;

const CardPortfolio = function ({ props }) {
  return (
    <Wrapper>
      <a target="blanc" className="btn" href={props.link}>
        {props.title}
      </a>

      <hr />
      <div className="container">
        {/* <section>
          <ul>
            <li>Photo</li>
            <li>Description</li>
          </ul>
        </section> */}
        <section>
          <div className="description">
            {props.description.map((element, id) => {
              return (
                <p id={`key-${id}`}>
                  <span> {id + 1}.</span> {element}
                </p>
              );
            })}
          </div>
          <img className="img" src={props.url} alt="img" />
        </section>
      </div>
    </Wrapper>
  );
};

export default CardPortfolio;
