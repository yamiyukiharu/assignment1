import styled from "styled-components"

export const Icon = styled.div`
    color: #444444;
    position: relative;
    top: -8px;
    left: 0px;
    opacity:0.5;

`;


export const NotificationIconContainer = styled.div`
    margin-top: 18px;
    margin-bottom: 29;
    margin-right: 31px;
    height: 31px;
    width: 33px;
    display: inline-block;
    cursor: pointer;

    &:hover {
        ${Icon} {
            opacity: 0.8;
        }
    }
`;


export const NotificationBadge = styled.div`
    box-sizing: border-box;
    border-radius: 10px;
    border: 2px solid #FFFFFF;
    background: #2995DA;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    color: #FFFFFF;

    height: 18px;
    width: 18px;
    position: relative;
    top: 0px;
    left: 15px;
    z-index: 1;
`;