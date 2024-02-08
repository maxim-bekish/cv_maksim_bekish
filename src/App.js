import Header from "./Components/header/Header";
import Main from "./Components/Main";
import styled from "styled-components";
import { Suspense } from "react";

const Container = styled.div`
  /* padding: 0 15px; */
  margin: 0 auto;
  max-width: 1250px;

  hr {
    margin: 0;
  }

  @media (max-width: 1400px) {
    max-width: 1440px;
  }
  @media (max-width: 990px) {
    max-width: 90%;
  }
  @media (max-width: 400px) {
    max-width: 95%;
  }
`;

function App() {
 

  return (
    <Container>
      <Header />
 
   

      <Main />
    </Container>
 
  );
}

export default function WrapperApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
