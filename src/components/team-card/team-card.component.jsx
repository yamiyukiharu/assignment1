import { EmptyCardFiller, Avatar, TeamCardContainer, CreatedAt, Description, Details, Header, Name, NameContainer, FavouriteStarIcon, CampaignIcon, LeadsIcon, HeaderRow } from "./team-card.styles";


const TeamCard = ({team}) => {
    const {
        id,
        name,
        image,
        description,
        campaigns_count,
        leads_count,
        is_favoured,
        is_archived,
        created_at
    } = team

    return (
        <TeamCardContainer>
            <Header>
            <HeaderRow>
                <Avatar src={image}/>
                <NameContainer>
                    <Name>{name}</Name>
                    <CreatedAt>Created {created_at}</CreatedAt>
                </NameContainer>
                <FavouriteStarIcon/>            
            </HeaderRow>
            <Description>{description} </Description>
            </Header>
            <Details>
                <CampaignIcon/>
                <span>{campaigns_count} Campaigns</span>
                <LeadsIcon/>
                <span>{leads_count} Leads</span>
            </Details>
        </TeamCardContainer>
    )
}


export default TeamCard;