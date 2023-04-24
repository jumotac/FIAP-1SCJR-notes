import styled from "styled-components";

interface PropsFab {
  position: string;
}

export const FabButtonStyled = styled.button<PropsFab>`
  position: absolute;
  ${(props) => (props.position === "left" ? "left: 5px;" : "right: 5px;")}
  top: 5px;
  color: var()--white;

  background-color: var(--primary);
  color: var(--white);
  font-size: 15px;
  font-weight: bold;

  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: 0px;

  box-shadow: 2px 4px 4px #0009;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    font-weight: normal;
    color: var(--primary);
    background: var(--white);
    box-shadow: 2px 10px 10px #0009;
    ${(props) => (props.position === "left" ? "transform: scale(2) translateX(8px) translateY(8px);" : "transform: scale(2) translateX(-8px) translateY(8px);")}
  }

  span {
    font-size: 12px;
  }
`;
