import styled from "styled-components";

export const ScTeamsCardListContainer = styled.div`
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);

  height: fit-content;
  flex: 1 1 auto;
`;

export const ScHeader = styled.div`
  box-sizing: border-box;
  height: 70px;
  padding: 28px 33px 17px 30px;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
`;

export const ScTitle = styled.div`
  font-size: 18px;
`;

export const ScShowingItemsHint = styled.div`
  color: #7f7f7f;
`;

export const ScCards = styled.div`
  padding: 31px 27px 31px 27px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: 2000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1420px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

export const ScGridCell = styled.div`
  display: flex;
`;
