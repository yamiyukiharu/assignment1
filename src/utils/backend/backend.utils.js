import AppDataJson from './app-data';

export const getTeamsData = async () => {
    const {teams} = AppDataJson;
    return teams;
}

export const getActivityData = async () => {
    const {activities} = AppDataJson;
    return activities;
}

export const getCurrentUserData = async () => {
    const {current_user} = AppDataJson;
    return current_user;
}