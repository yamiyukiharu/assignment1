import styled from "styled-components"

export const NavBarContainer = styled.div`
    box-sizing: border-box;
    height: 80px;
    border-bottom: 1px solid #E2E2E2;
    display: flex;
    
`;

export const AppName = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #1A1919;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 41px 32px 41px 26px;
`;

export const Divider = styled.div`
    background: #E2E2E2;
    width: 1px;
`;

export const Title = styled.div`
    font-size: 18px;
    color: #1A1919;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 41px 32px 41px 26px;
    margin-right: auto;
`;

export const MenuSettingsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 36px;
`;

export const Greeting = styled.div`
    font-size: 14px;
    opacity: 0.5;
`;

export const ProfilePic = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 18px;
    background: #2995DA;
    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
`;

export const DropdownIcon = styled.div`
    opacity: 0.2;
    cursor: pointer;

    &:hover {
        opacity: 0.6
    }
`;
