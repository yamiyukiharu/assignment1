import styled from 'styled-components'
import { ReactComponent as SearchIconSvg } from  '../../assets/icon-search.svg'

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    
`;

export const SearchBarIcon = styled(SearchIconSvg)`
    height: 16px;
    width: 16px;
`;

export const SearchTextField = styled.input`
    box-sizing: border-box;
    margin: 0px 10px 0px 5px;
    padding: 1px 2px 1px 2px;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        border: 1px solid #A4A6A8;
    }
`;