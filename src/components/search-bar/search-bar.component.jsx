import { useDispatch } from "react-redux";
import { setTeamsFilter } from "../../store/teams/teams.actions";
import { SearchBarContainer, SearchBarIcon, SearchTextField } from "./search-bar.styles";

const SearchBar = () => {
    const dispatch = useDispatch()
    
    const textChangeHandler = (event) => {
        dispatch(setTeamsFilter(event.target.value.toLowerCase()))
    }

    return (
        <SearchBarContainer>
            <SearchBarIcon/>
            <SearchTextField placeholder="Search team name..." onChange={textChangeHandler}/>
        </SearchBarContainer>
    )
}

export default SearchBar;