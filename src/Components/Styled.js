import { styled } from "styled-components";

export const SelectStartdiv = styled.div`
  display: flex;
  justify-content: center;

  .active {
    color: yellow;
    font-size: 40px;
    cursor: pointer;
  }
  .inactive {
    background-color: white;
    font-size: 40px;
    cursor: pointer;
  }
`;
