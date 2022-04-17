import TeamPageHeader from "../../components/team-page-header/team-page-header.component";
import TeamsCardList from "../../components/teams-card-list/teams-card-list.component";
import { TeamsPageContainer, TeamsPageContent } from "./teams-page.styles";

import AppDataJson from '../../utils/app-data';
import { useState } from "react";
import ActivityCard from "../../components/activity-card/activity-card.component";


function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
  
    useState(() => {
      const listener = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }
  
      window.addEventListener('resize', listener);
  
      return () => {
        window.removeEventListener('resize', listener);
      }
    })
  
    return {width, height}
  }

const TeamsPage = () => {
    const {teams} = AppDataJson;
    const {width} = useWindowDimensions();

    return (
        <TeamsPageContainer>
            <TeamPageHeader/>
            <TeamsPageContent>
                <TeamsCardList pageWidth={width} teams={teams}/>
                <ActivityCard/>
            </TeamsPageContent>
        </TeamsPageContainer>
    )
}

export default TeamsPage;