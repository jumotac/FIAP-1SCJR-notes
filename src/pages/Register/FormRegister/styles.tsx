import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    transform: translateY(-300px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  
  border-radius: 10px;
  background-color: var(--primary);
  box-shadow: 0px 4px 10px var(--bgPrimary),
              0px 10px 40px var(--bgPrimary);

  animation: ${fadeIn} .2s;

  h1 {
    align-self: center;
    margin-bottom: 10px;
  }

  input {
    color: var(--lightGray);
    font-weight: bold;
  }

  a {
    color: var(--white);
    align-self: center;

    :hover{
      color: var(--lightGray);
    }
  }
`;
