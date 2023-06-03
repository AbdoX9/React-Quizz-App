import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --backgroundColor: #F5F7FB;
    --buttonColor: #4D5B9E;
    --buttonColor: #4D5B9E;
    --textColor: #293264;
    --selectColor: #D6DBF5;
    --correctColor: #94D7A2;
    --selectColor: #F8BCBC;
}

* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--backgroundColor)
  }

  h1 {
    font-size: 31.25px;
      font-weight: 600;
      color: var(--textColor);
  }

  p {
    font-size: 16px;
    color: var(--textColor);
  }

  button {
    font-size: 10.24px;
    color: var(--textColor)
  }

  .answersCointaner {
    @media (max-width: 767px) { 
      display: flex;
    flex-direction: column;
    }
  }

`