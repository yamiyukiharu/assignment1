import ACTIVITY_ACTION_TYPES from "./activity.types";

const ACTIVITY_INITIAL_STATE = {
    activities: [],
};

const ActivityReducer = (state=ACTIVITY_INITIAL_STATE, action) => {
    const {type, payload} = action;
    
    switch (type) {
        case ACTIVITY_ACTION_TYPES.SET_ACTIVITIES:
            return {...state, activities: payload};
        default:
            return state;
    }
}

export default ActivityReducer;