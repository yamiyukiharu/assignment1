import styled from "styled-components";
import { ReactComponent as LeadsIconSvg } from "../../assets/icon-leads-small.svg";
import { ReactComponent as CampaignIconSvg } from "../../assets/icon-conversations-small.svg";

export const ScHeader = styled.div`
  padding: 0px 14px 0px 16px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e4e7ec;
`;

export const ScHeaderRow = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const ScAvatar = styled.img`
  margin-right: 9px;
  height: 36px;
  width: 36px;
  border-radius: 3px;
`;

export const ScName = styled.div`
  color: #444444;
  font-size: 16px;
  font-weight: bold;
`;

export const ScCreatedAt = styled.div`
  color: #565656;
  font-size: 13px;
  opacity: 0.5;
`;

export const ScNameContainer = styled.div`
  margin-right: auto;
`;

export const ScStarIconContainer = styled.div`
  svg {
    height: 16px;
    width: 16px;

    color: ${({ isFavorited }) => (isFavorited ? "#F8CE43" : "transparent")};

    &:hover {
      color: #f8ce43;
      opacity: 0.6;
    }
  }
`;

export const ScDescription = styled.div`
  color: #565656;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ScMarketingDataContainer = styled.div`
  box-sizing: border-box;
  height: 59px;
  padding-left: 17px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
`;

export const ScMarketingData = styled.div`
  column-gap: 10px;
  display: flex;
  align-items: center;
  opacity: 0.45;

  &:hover {
    opacity: 0.9;
  }
`;

export const ScCampaignIcon = styled(CampaignIconSvg)`
  height: 16px;
  width: 15px;
`;

export const ScLeadsIcon = styled(LeadsIconSvg)`
  height: 16px;
  width: 14px;
`;

export const ScTeamCardContainer = styled.div`
  box-sizing: border-box;
  height: 181px;
  width: 270px;
  border: 1px solid #e4e7ec;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: all 0.2s;
  background-color: ${({ isArchived }) => (isArchived ? "#EBEEF2" : "#FFFFFF")};

  animation: appear 0.2s linear 0s 1 forwards;

  @keyframes appear {
    from {
      opacity: 0.1;
    }
  }

  &:hover {
    border: 1px solid #0083e3;
    cursor: pointer;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;
