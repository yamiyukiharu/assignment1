import { useDispatch } from "react-redux";
import { setTeamsFilter } from "../../store/teams/teams.actions";
import { ScSearchBarContainer, ScInputField } from "./search-bar.styles";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

const SearchBar = () => {
  const dispatch = useDispatch();

  const textChangeHandler = (event) => {
    dispatch(setTeamsFilter(event.target.value.toLowerCase()));
  };

  return (
    <ScSearchBarContainer>
      <SearchIcon />
      <ScInputField
        placeholder="Search team name..."
        onChange={textChangeHandler}
      />
    </ScSearchBarContainer>
  );
};

export default SearchBar;
