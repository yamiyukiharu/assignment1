import styled from "styled-components";

export const ScTeamsPageContainer = styled.div`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
`;

export const ScContent = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 42px 39px 39px 42px;
  justify-content: space-between;
  column-gap: 33px;

  flex: 1 1 auto;
  overflow: auto;
`;
