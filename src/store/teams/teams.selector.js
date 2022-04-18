import { createSelector } from "reselect";
import { TEAMS_CATEGORIES } from "./teams.reducer";

export const selectTeamsReducer = (state) => state.teams;

export const selectTeamsCategory = ({teams}) => teams.teamsCategory;

export const selectTeamsFilter = ({teams}) => teams.teamsFilter;

export const selectTeamsArray = createSelector(
    [selectTeamsReducer],
    (teams) => teams.teamsArray
);

export const selectCategorizedAndFilteredTeams = createSelector(
    [selectTeamsArray, selectTeamsCategory, selectTeamsFilter],
    (teamsArray, category, teamsFilter) => {
        let filteredTeams = teamsArray;
        
        if (category === TEAMS_CATEGORIES.FAVOURITES) {
            filteredTeams = teamsArray.filter((team) => team.is_favorited)
        } else if (category === TEAMS_CATEGORIES.ARCHIVED) {
            filteredTeams = teamsArray.filter((team) => team.is_archived)
        } 
        console.log(teamsArray)
        if (teamsFilter === '') {
            return(filteredTeams)
        } else {
            return (filteredTeams.filter((team) => team.name.includes(teamsFilter)))
        }
    }
)
