import styled from 'styled-components'
import {ReactComponent as PlusIconSvg} from '../../assets/plus-sign.svg'

export const CreateNewButtonContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    height: 36px;
    background: #40D2BF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    &:hover {
        background: #20B29F;
        cursor: pointer;
    }
`;

export const PlusIcon = styled(PlusIconSvg)`
    margin-right: 12px;
`;

export const ButtonLabel = styled.span`
    color: #FFFFFF;
    font-size: 14px;
`;