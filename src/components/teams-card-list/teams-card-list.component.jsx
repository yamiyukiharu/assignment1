import TeamCard from "../team-card/team-card.component";
import { Header, ShowingItemsHint, TeamsCardListContainer, Title, Cards } from "./teams-card-list.styles";

import AppDataJson from '../../utils/app-data';

const TeamsCardList = () => {

    const {teams} = AppDataJson;

    return (
        <TeamsCardListContainer>
            <Header>
                <Title>All Teams</Title>
                <ShowingItemsHint>Showing {teams.length} of {teams.length} teams</ShowingItemsHint>
            </Header>
            <Cards>
                {
                    teams.map((team) => <TeamCard team={team}/>)
                }
            </Cards>
        </TeamsCardListContainer>
    )
}

export default TeamsCardList;