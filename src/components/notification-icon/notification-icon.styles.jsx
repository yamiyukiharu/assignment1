import styled from "styled-components";

export const ScIconContainer = styled.div`
  color: #444444;
  position: relative;
  top: -8px;
  left: 0px;
  opacity: 0.5;
`;

export const ScNotificationIconContainer = styled.div`
  margin-top: 18px;
  margin-bottom: 29;
  margin-right: 31px;
  height: 31px;
  width: 33px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    ${ScIconContainer} {
      opacity: 0.8;
    }
  }
`;

export const ScNotificationBadge = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  border: 2px solid #ffffff;
  background: #2995da;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #ffffff;

  height: 18px;
  width: 18px;
  position: relative;
  top: 0px;
  left: 15px;
  z-index: 1;
`;
