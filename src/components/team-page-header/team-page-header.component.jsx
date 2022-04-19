import CreateNewButton from "../create-new-button/create-new-button.component";
import SearchBar from "../search-bar/search-bar.component";
import Tabs from "../tabs/tabs.componenet";
import {
  ScTeamPageHeaderContainer,
  ScTeamsIcon,
  ScTitle,
  ScSpacer,
  ScFirstRow,
  ScSecondRow,
} from "./team-page-header.styles";

const TeamPageHeader = () => {
  return (
    <ScTeamPageHeaderContainer>
      <ScFirstRow>
        <ScTeamsIcon />
        <ScTitle>Teams</ScTitle>
        <ScSpacer />
        <CreateNewButton text="CREATE NEW TEAM" />
      </ScFirstRow>
      <ScSecondRow>
        <Tabs tabNames={["All", "Favourites", "Archived"]} />
        <ScSpacer />
        <SearchBar />
      </ScSecondRow>
    </ScTeamPageHeaderContainer>
  );
};

export default TeamPageHeader;
