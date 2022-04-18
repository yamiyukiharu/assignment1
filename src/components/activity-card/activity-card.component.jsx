import ActivityCardEntry from "../activity-card-entry/activity-card-entry.component";
import { ScContainer, ScEntryContainer, ScHeader } from "./activity-card.component.styles";



const ActivityCard = ({activities}) => {
    return(
        <ScContainer>
            <ScHeader>Activity</ScHeader>
            <ScEntryContainer>
            {
                activities.map((activity) => <ActivityCardEntry key={activity.id} activity={activity}/>)
            }
            </ScEntryContainer>
            
        </ScContainer>
    )
}

export default ActivityCard;