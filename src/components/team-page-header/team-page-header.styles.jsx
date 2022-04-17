import styled from 'styled-components'
import { ReactComponent as TeamsIconSvg } from '../../assets/icon-teams.svg'

export const TeamPageHeaderContainer = styled.div`
    box-sizing: border-box;
    height: 156px;
    width: 100%;
    padding: 30px 38px 0px 42px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    
`;

export const FirstRow = styled.div`
    box-sizing: border-box;
    height: 34px;
    width: 100%;
    display: flex;

`;

export const SecondRow = styled.div`
    box-sizing: border-box;
    height: 50px;
    display: flex;
    justify-self: end;
    
`;

export const TeamsIcon = styled(TeamsIconSvg)`
    color: #A4A6A8;
    height: 34px;
    width: 34px;
    margin-right: 5px;
`;

export const Title = styled.span`
    color: #1A1919;
    font-size: 30px;
`;

export const Spacer = styled.div`
    flex-grow: 1;
`;