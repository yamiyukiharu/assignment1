import CreateNewButton from "../create-new-button/create-new-button.component";
import SearchBar from "../search-bar/search-bar.component";
import Tabs from "../tabs/tabs.componenet";
import { TeamPageHeaderContainer, TeamsIcon, Title, Spacer, FirstRow, SecondRow } from "./team-page-header.styles";


const TeamPageHeader = () => {
    return (
        <TeamPageHeaderContainer>
            <FirstRow>
                <TeamsIcon/>
                <Title>Teams</Title>
                <Spacer/>
                <CreateNewButton text='CREATE NEW TEAM'/>
            </FirstRow>
            <SecondRow>
                <Tabs tabNames={['All', 'Favourites', 'Archived']}/>
                <Spacer/>
                <SearchBar/>
            </SecondRow>
        </TeamPageHeaderContainer>
    )
}

export default TeamPageHeader;