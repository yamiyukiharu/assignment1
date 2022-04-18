import styled from "styled-components"

export const ScAvatar = styled.img`
    height: 36px;
    width: 36px;
    border-radius: 18px;
`;

export const ScActionContainer = styled.div`
    font-size: 14px;
    color: #444444;
    margin-top: 2px;
    margin-bottom: 5px;
`;

export const ScBoldText = styled.span`
    font-weight: bold;
`;

export const ScCreatedAt = styled.div`
    color: #565656;
    font-size: 13px;
    opacity: 0.5;
`;

export const ScActivityEntryContainer = styled.div`
    display: flex;
    column-gap: 9px;
    height: 59px;
    transition: all 0.07s linear;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        ${ScActionContainer} {
            color: #0083E3;
            
        }
    }

    &:active {
        transform: scale(0.98);
    }
`;