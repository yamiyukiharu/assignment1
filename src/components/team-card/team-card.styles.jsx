import styled from "styled-components"
import { ReactComponent as StarIconSvg} from '../../assets/icon-star-default.svg'
import { ReactComponent as LeadsIconSvg} from '../../assets/icon-leads-small.svg'
import { ReactComponent as CampaignIconSvg} from '../../assets/icon-conversations-small.svg'


export const TeamCardContainer = styled.div`
    box-sizing: border-box;
    height: 181px;
    max-width: 307px;
    border: 1px solid #E4E7EC;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    padding: 16px 14px 15px 16px;
    display: flex;
    justify-content: space-between;
    row-gap: 16px;
    flex-wrap: wrap;
    border-bottom: 1px solid #E4E7EC;
`;

export const Avatar = styled.img`
    margin-right: 9px;
    height: 36px;
    width: 36px;
    border-radius: 3px;
`;

export const Name = styled.div`
    color: #444444;
    font-size: 16px;
    font-weight: bold;
`;

export const CreatedAt = styled.div`
    color: #565656;
    font-size: 13px;
    opacity: 0.5;

`;

export const NameContainer = styled.div`
    margin-right: auto;
`

export const FavouriteStarIcon = styled(StarIconSvg)`
    height: 16px;
    width: 16px;

    color: transparent;
    
    &:hover {
        color: #F8CE43;
        opacity: 0.6;
    }
`;

export const Description = styled.div`
    color: #565656;
    font-size: 14px;
    height: 34px;
`;

export const Details = styled.div`
    box-sizing: border-box;
    flex-grow: 1;
    padding-left: 17px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    opacity: 0.45;
    font-size: 13px;
`;

export const CampaignIcon = styled(CampaignIconSvg)`
    height: 16px;
    width: 15px;
`;

export const LeadsIcon = styled(LeadsIconSvg)`
    height: 16px;
    width: 14px;
`;