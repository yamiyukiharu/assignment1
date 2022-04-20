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
        {teams.map((team, idx) => (
          <ScGridCell key={idx}>
            <TeamCard team={team} />
          </ScGridCell>
        ))}
      </ScCards>
    </ScTeamsCardListContainer>
  );
};

export default TeamsCardList;
