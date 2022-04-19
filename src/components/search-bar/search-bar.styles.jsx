import styled from "styled-components";

export const ScSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    height: 16px;
    width: 16px;
  }
`;

export const ScInputField = styled.input`
  box-sizing: border-box;
  margin: 0px 10px 0px 5px;
  padding: 1px 2px 1px 2px;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    border: 1px solid #a4a6a8;
  }
`;
