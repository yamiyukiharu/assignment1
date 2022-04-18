import styled from 'styled-components'

export const SideBarButtonContainer = styled.div`
    height: 80px;
    width: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
    background: ${({selected}) => selected ? '#2995DA' : 'none'};

    opacity: ${({type, selected}) => type === 'logo' || selected ? 1.0 : 0.3};

    &:hover {
        opacity: 1.0;

    }
`;