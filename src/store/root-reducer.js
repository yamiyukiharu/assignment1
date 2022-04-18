import {combineReducers} from 'redux'

import TeamsReducer from './teams/teams.reducer'

export const rootReducer = combineReducers({
    teams: TeamsReducer,
})