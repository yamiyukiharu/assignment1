import { createAction } from "../../utils/reducer/reducer.utils";
import ACTIVITY_ACTION_TYPES from "./activity.types";

export const setActivities = (activities) => createAction(
    ACTIVITY_ACTION_TYPES.SET_ACTIVITIES, activities
)