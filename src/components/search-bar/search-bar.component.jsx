import { SearchBarContainer, SearchBarIcon, SearchTextField } from "./search-bar.styles";

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchBarIcon/>
            <SearchTextField placeholder="Search team name..."/>
        </SearchBarContainer>
    )
}

export default SearchBar;