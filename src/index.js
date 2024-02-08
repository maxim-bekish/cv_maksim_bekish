import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import styled, { createGlobalStyle } from "styled-components";
import './i18'

const Global = createGlobalStyle`

*{
body,
div,
form,
fieldset,
legend,
label,
ul,
a,
p,
input,
span,
li,
button,
h1,
h2,
h3,
h4,
h5,
h6,
th,
td,
caption {
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0;
  padding: 0;
  font-weight: normal;
  padding-inline-start: 0;
}
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 21px;



li{
  list-style-type: none;
}

h2 {
  display: flex;
  justify-content: center;
  font-family: "Gilroy-Bold";
  color: #070707;
  font-size: 1.8rem;
  line-height: 2rem;
}

}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Global />
    <App />
  </>
);
