import {combineReducers} from 'redux'
import ActivityReducer from './activity/activity.reducer'
import TeamsReducer from './teams/teams.reducer'
import UserReducer from './user/user.reducer'


export const rootReducer = combineReducers({
    teams: TeamsReducer,
    user: UserReducer,
    activity: ActivityReducer,
})