import styled from 'styled-components'

export const TabsContainer = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const Tab = styled.div`
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px 0px 20px;
    text-align: center;
    font-size: 18px;
    color: ${({isSelected}) => isSelected ? '#0083E3': '#000000'};
    transition: border 1s;

    border-bottom: ${({isSelected}) => 
        isSelected 
        ? '3px solid #0083E3' 
        : '3px solid transparent'};

    &:hover {
        color: #0083E3;
        cursor: pointer;
        opacity: 0.6;
    }
`;