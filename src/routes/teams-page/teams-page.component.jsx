import TeamPageHeader from "../../components/team-page-header/team-page-header.component";
import TeamsCardList from "../../components/teams-card-list/teams-card-list.component";
import { TeamsPageContainer, TeamsPageContent } from "./teams-page.styles";
import ActivityCard from "../../components/activity-card/activity-card.component";
import { getActivityData, getTeamsData } from "../../utils/backend/backend.utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeamsArray } from "../../store/teams/teams.actions";
import { selectCategorizedAndFilteredTeams } from "../../store/teams/teams.selector";


const TeamsPage = () => {
    const dispatch = useDispatch()
    const teams = useSelector(selectCategorizedAndFilteredTeams)

    useEffect(() => {
      const getTeamsArray = async () => {
        const teamsArray = await getTeamsData();
        dispatch(setTeamsArray(teamsArray));
      };

      const getActivities = async () => {
        const activities = await getActivityData();
      }

      getTeamsArray();
      getActivities();
    }, [dispatch])

    return (
        <TeamsPageContainer>
            <TeamPageHeader/>
            <TeamsPageContent>
                <TeamsCardList teams={teams}/>
                 
            </TeamsPageContent>
        </TeamsPageContainer>
    )
}

export default TeamsPage;