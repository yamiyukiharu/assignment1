import styled from "styled-components"
import CONSTANTS from "../../constants";

export const ScContainer = styled.div`
    box-sizing: border-box;
    width: ${String(CONSTANTS.ACTIVITY_CARD_WIDTH) + 'px'};
    border: 1px solid black;
    flex: 0 0 auto;
`;