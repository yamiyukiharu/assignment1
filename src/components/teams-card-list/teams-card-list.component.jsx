import TeamCard from "../team-card/team-card.component";
import { Header, ShowingItemsHint, TeamsCardListContainer, Title, Cards } from "./teams-card-list.styles";


const TeamsCardList = ({pageWidth, teams}) => {

    return (
        <TeamsCardListContainer pageWidth={pageWidth}>
            <Header>
                <Title>All Teams</Title>
                <ShowingItemsHint>Showing {teams.length} of {teams.length} teams</ShowingItemsHint>
            </Header>
            <Cards>
                {
                    teams.map((team, idx) => <TeamCard key={idx} team={team}/>)
                }
            </Cards>
        </TeamsCardListContainer>
    )
}

export default TeamsCardList;