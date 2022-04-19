import styled from "styled-components";

export const ScCreateNewButtonContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  height: 36px;
  background: #40d2bf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    background: #20b29f;
    cursor: pointer;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(1);
  }

  span {
    color: #ffffff;
    font-size: 14px;
  }

  svg {
    margin-right: 12px;
  }
`;
