import TeamCard from "../team-card/team-card.component";
import {
  ScGridCell,
  ScHeader,
  ScShowingItemsHint,
  ScTeamsCardListContainer,
  ScTitle,
  ScCards,
} from "./teams-card-list.styles";

const TeamsCardList = ({ teams }) => {
  return (
    <ScTeamsCardListContainer>
      <ScHeader>
        <ScTitle>All Teams</ScTitle>
        <ScShowingItemsHint>
          Showing {teams.length} of {teams.length} teams
        </ScShowingItemsHint>
      </ScHeader>
      <ScCards>
        {teams.map((team) => (
          <ScGridCell>
            <TeamCard key={team.id} team={team} />
          </ScGridCell>
        ))}
      </ScCards>
    </ScTeamsCardListContainer>
  );
};

export default TeamsCardList;
