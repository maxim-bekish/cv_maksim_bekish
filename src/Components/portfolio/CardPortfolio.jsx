import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }
  hr {
    background: #9e9e9e42;
    border: 0;
    margin: 0 0 15px 0;
    width: 100%;
    height: 1px;
  }
  a {
    font-family: "Gilroy-Medium";
    text-decoration: none;
    color: black;
    padding: 14px 27px 7px 27px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border: 3px solid #9e9e9e42;
    border-bottom: none;
    margin: 10px 0 0px 0;
    &:hover {
      background: #9e9e9e42;
    }
    &:active {
      background: #f6f6f6;
      border: 0;
    }
  }
`;

const CardPortfolio = function (props) {
  return (
    <Wrapper>
      <a target="blanc" href={props.props.link}>
        {props.props.title}
      </a>
      <hr />
      <img src={props.props.url} alt="img" />
    </Wrapper>
  );
};

export default CardPortfolio;
