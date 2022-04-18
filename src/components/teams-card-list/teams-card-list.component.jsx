import TeamCard from "../team-card/team-card.component";
import { Header, ShowingItemsHint, TeamsCardListContainer, Title, Cards } from "./teams-card-list.styles";


const TeamsCardList = ({teams}) => {

    return (
        <TeamsCardListContainer>
            <Header>
                <Title>All Teams</Title>
                <ShowingItemsHint>Showing {teams.length} of {teams.length} teams</ShowingItemsHint>
            </Header>
            <Cards>
                {
                    teams.map((team) => <TeamCard key={team.id} team={team}/>)
                }
            </Cards>
        </TeamsCardListContainer>
    )
}

export default TeamsCardList;