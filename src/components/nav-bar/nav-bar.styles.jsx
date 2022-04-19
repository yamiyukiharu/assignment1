import styled from "styled-components";

export const ScNavBarContainer = styled.div`
  box-sizing: border-box;
  height: 80px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
`;

export const ScAppName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #1a1919;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 41px 32px 41px 26px;
`;

export const ScDivider = styled.div`
  background: #e2e2e2;
  width: 1px;
`;

export const ScTitle = styled.div`
  font-size: 18px;
  color: #1a1919;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 41px 32px 41px 26px;
  margin-right: auto;
`;

export const ScMenuSettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 36px;

  svg {
    opacity: 0.2;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const ScGreeting = styled.div`
  font-size: 14px;
  opacity: 0.5;
`;

export const ScProfilePic = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  background: #2995da;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
`;
