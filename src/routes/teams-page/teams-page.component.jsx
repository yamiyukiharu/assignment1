import TeamPageHeader from "../../components/team-page-header/team-page-header.component";
import TeamsCardList from "../../components/teams-card-list/teams-card-list.component";
import { TeamsPageContainer, TeamsPageContent } from "./teams-page.styles";
import ActivityCard from "../../components/activity-card/activity-card.component";
import { getActivityData, getTeamsData } from "../../utils/backend/backend.utils";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTeamsArray } from "../../store/teams/teams.actions";
import { selectCategorizedAndFilteredTeams } from "../../store/teams/teams.selector";
import { selectActivities } from "../../store/activity/activity.selector";
import { setActivities } from "../../store/activity/activity.actions";


const TeamsPage = () => {
    const dispatch = useDispatch();
    const activities = useSelector(selectActivities);
    const teams = useSelector(selectCategorizedAndFilteredTeams);

    useEffect(() => {
      const getTeamsArray = async () => {
        const teamsArray = await getTeamsData();
        dispatch(setTeamsArray(teamsArray));
      };
      getTeamsArray();
    }, [dispatch])

    useEffect(() => {
      const getActivities = async () => {
        const data = await getActivityData();
        dispatch(setActivities(data));
      }
      getActivities();
      const intervalId = setInterval(getActivities, 5000);
      return () => clearInterval(intervalId);
    }, [dispatch])

    return (
        <TeamsPageContainer>
            <TeamPageHeader/>
            <TeamsPageContent>
                <TeamsCardList teams={teams}/>
                <ActivityCard activities={activities}/>
            </TeamsPageContent>
        </TeamsPageContainer>
    )
}

export default TeamsPage;