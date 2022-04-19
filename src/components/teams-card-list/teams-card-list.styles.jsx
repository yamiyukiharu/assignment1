import styled from "styled-components"

export const TeamsCardListContainer = styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1);
    
    height: fit-content;
    flex: 1 1 auto;
`;

export const Header = styled.div`
    box-sizing: border-box;
    height: 70px;
    padding: 28px 33px 17px 30px;
    border-bottom: 1px solid #EFEFEF;
    display: flex;
    justify-content: space-between;
    
`;

export const Title = styled.div`
    font-size: 18px;
`;

export const ShowingItemsHint = styled.div`
    color: #7F7F7F;
`;

export const Cards = styled.div`
    padding: 31px 27px 31px 27px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 16px;

    @media(max-width:2000px) {
        grid-template-columns: repeat(3,1fr);
    }

    @media(max-width:1420px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media(max-width:1120px) {
        grid-template-columns: 1fr;
    }

`;

export const Cell = styled.div`
    display: flex;
`;
