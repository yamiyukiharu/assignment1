import styled from 'styled-components'

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

export const ProfilePic = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 18px;
    background: #2995DA;
    margin-left: 8px;
    margin-right: 8px;
`;

export const DropdownIcon = styled.div`
    opacity: 0.2;
    cursor: pointer;

    &:hover {
        opacity: 0.6
    }
`;
