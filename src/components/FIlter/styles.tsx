import styled from 'styled-components';

export const FilterStyled = styled.input`
  color: var(--white);
  background-color: var(--bgSearch);
  flex-grow: 1;
  position: absolute;
  width: 50%;
  height: 55px;
  top: 70px;
  left: 40px;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 2px 2px 10px #00000099;
  transition: 0.3s;

  :hover {
    background: var(--searchHover);
  }

  @media (max-width: 425px){
    width: 90%;
    margin-top: 10px;
    right: 15px;
  }

  ::placeholder {
  color: var(--lightGray);
}
`;