import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --bgPrimary: #151819; 
    --primary:  #ed145b;
    --white: #ffffff;
    --gray: #68747b;
    --lightGray: #acc1cc;
    --darkGray: #706a66;
    --bgSearch: rgba(255, 255, 255, 0.16);
    --searchHover: rgba(255, 255, 255, 0.24);
  }


  * {
    margin: 5px;
    padding: 0;
    outline: 0;

    box-sizing: border-box;
  }

  body {
    font-family: Montserrat;

    background-color: var(--bgPrimary);
    color: var(--white);

    overflow-x: hidden;
  }

  textarea {
    border: 0;
    border-radius: 5px;
    height: 80px;
    padding: 15px 0px;

    background-color: transparent;
    font-size: 16px;
    font-family: Montserrat;
    color: var(--white);

    ::placeholder{
      color: var(--lightGray);
    }

  }

  input {
    border: 0;
    border-radius: 5px;
    padding: 5px;

    background-color: var(--bgPrimary);
    font-size: 16px;
    font-family: Montserrat;
    color: var(--white);

    ::placeholder{
      color: var(--gray);
    }

  }

  input[type="checkbox"]{
    width: 20px;
    height: 20px;
  }
`;
