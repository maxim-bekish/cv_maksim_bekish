import React, { useState } from "react";
import Header from "./Components/header/Header";
import Main from "./Components/Main";
import closed from "./svg/closed.svg";
import "./css/reset.css";
import "./css/styles.css";




function App() {
  const [menuActive, setMenuActive]=useState(false);

  return (
    <div className="App">
      <Header active={menuActive} setActive={setMenuActive} />

      <Main />
      <div onClick={() => setMenuActive(!menuActive)}>
        <img className="closedBurger" src={closed} alt="closed" />
      </div>
    </div>
  );
}

export default App;
