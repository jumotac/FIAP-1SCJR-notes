import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
   from {
    transform: scale(0.2) rotate(180deg);
    opacity: 0;
  }
  to {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const Container = styled.article`
  width: 200px;
  height: 200px;
  padding: 10px;
  position: relative;
  margin-top: 170px;
  font-size: 18px;
  color: var(--lightGray);
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid var(--gray);
  box-shadow: 2px 2px 10px #00000099;
  animation: ${fadeIn} ease-in .5s;

  p:first-child {
    font-size: 14px;
    margin-bottom: 20px;
    color: var(--gray);
    font-weight: 100;
  }

  :hover {
    background: var(--primary);
    color: var(--white);
    .material-icons,
    p:first-child {
      color: var(--white);
    }
  }

  .material-icons {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 32px;
    cursor: pointer;
    transition: 0.3s;
    color: var(--primary)
  }

  .material-icons:not(#priority, .icon-edit):hover  {
    color: var(--gray);
    transform: scale(1.1);
    transform: rotate(360deg);
  }

  #priority {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
  }

   .material-icons.icon-edit{
    right: 40px;
  }

  .material-icons.icon-edit:hover{
    color: var(--gray);
  }

  @media (max-width: 425px){
    width: 100%;
  }
`;
