import styled from 'styled-components'

export const SideBarButtonContainer = styled.div`
    height: 80px;
    width: 80px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    opacity: ${({type}) => type === 'logo' ? 1.0 : 0.3};

    &:hover {
        opacity: 1.0;

    }
`;