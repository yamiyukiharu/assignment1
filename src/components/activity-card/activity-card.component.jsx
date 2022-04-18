import ActivityCardEntry from "../activity-card-entry/activity-card-entry.component";
import { ScContainer, ScEntryContainer, ScHeader } from "./activity-card.component.styles";



const ActivityCard = ({activities}) => {
    return(
        <ScContainer>
            <ScHeader>Activity</ScHeader>
            <ScEntryContainer>
            {
                activities.map((activity, idx) => <ActivityCardEntry key={idx} activity={activity}/>)
            }
            </ScEntryContainer>
            
        </ScContainer>
    )
}

export default ActivityCard;