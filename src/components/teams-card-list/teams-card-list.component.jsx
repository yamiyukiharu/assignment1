import TeamCard from "../team-card/team-card.component";
import { Header, ShowingItemsHint, TeamsCardListContainer, Title, Cards } from "./teams-card-list.styles";

import AppDataJson from '../../utils/app-data';

const TeamsCardList = () => {

    const {teams} = AppDataJson;
    const team1 = teams[0];

    return (
        <TeamsCardListContainer>
            <Header>
                <Title>All Teams</Title>
                <ShowingItemsHint>Showing {65} of {65} teams</ShowingItemsHint>
            </Header>
            <Cards>
                <TeamCard team={team1}/>
            </Cards>
        </TeamsCardListContainer>
    )
}

export default TeamsCardList;