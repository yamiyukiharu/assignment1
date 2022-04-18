import { createAction } from '../../utils/reducer/reducer.utils';
import TEAMS_ACTION_TYPES from "./teams.types";

export const setTeamsArray = (teams) => createAction(
    TEAMS_ACTION_TYPES.SET_TEAMS_ARRAY, teams
)

export const setTeamsCategory = (category) => createAction(
    TEAMS_ACTION_TYPES.SET_TEAMS_CATEGORY, category
)

export const setTeamsFilter = (searchFilter) => createAction(
    TEAMS_ACTION_TYPES.SET_TEAMS_FILTER, searchFilter
)

export const setTeamsFavourite = (teams, teamId, isFavourite) => {
    const newTeams = teams.map((team) => (
        team.id === teamId 
        ? {...team, is_favorited:isFavourite}
        : {...team}
    ))
    return(createAction(
        TEAMS_ACTION_TYPES.SET_TEAMS_FAVOURITE, newTeams))
}
