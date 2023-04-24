import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  padding: 60px 22px;
  flex: 1;

  @media (max-width: 425px){
    padding: 110px 30px;
  }

  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;
  .select-order{
    width: 200px;
    height: 50px;
    padding: 0px 20px;
    background: var(--primary);
    border: none;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    position: absolute;
    top: 150px;
    left: 40px;
    cursor: pointer;

    :hover{
      background: var(--white);
      color: var(--primary);
      border: none;
    }

    @media (max-width: 425px){
      width: 40%;
      left: 20px;
      top: 150px;
  }

  }  
`;


