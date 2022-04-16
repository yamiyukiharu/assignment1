import TeamPageHeader from "../../components/team-page-header/team-page-header.component";
import TeamsCardList from "../../components/teams-card-list/teams-card-list.component";
import { TeamsPageContainer, TeamsPageContent } from "./teams-page.styles";

const TeamsPage = () => {
    return (
        <TeamsPageContainer>
            <TeamPageHeader/>
            <TeamsPageContent>
                <TeamsCardList/>        
            </TeamsPageContent>
        </TeamsPageContainer>
    )
}

export default TeamsPage;