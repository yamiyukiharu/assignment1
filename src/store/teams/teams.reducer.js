import TEAMS_ACTION_TYPES from "./teams.types";

export const TEAMS_CATEGORIES = {
    ALL: 'All',
    FAVOURITES: 'Favourites',
    ARCHIVED: 'Archived',
};

const TEAMS_INITIAL_STATE = {
    teamsArray: [],
    teamsCategory: TEAMS_CATEGORIES.ALL,
    teamsFilter: '',
};

const TeamsReducer = (state = TEAMS_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case TEAMS_ACTION_TYPES.SET_TEAMS_ARRAY:
            return {...state, teamsArray:payload}
        case TEAMS_ACTION_TYPES.SET_TEAMS_CATEGORY:
            return {...state, teamsCategory:payload}
        case TEAMS_ACTION_TYPES.SET_TEAMS_FILTER:
            return {...state, teamsFilter:payload}
        case TEAMS_ACTION_TYPES.SET_TEAMS_FAVOURITE:
            return {...state, teams: payload}
        case TEAMS_ACTION_TYPES.SET_TEAMS_ARCHIVED:
            return {...state, teams: payload}
        default:
            return state;
    }
};

export default TeamsReducer;