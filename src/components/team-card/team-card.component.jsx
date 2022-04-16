import { TeamCardAvatar, TeamCardContainer, TeamCardCreatedAt, TeamCardDescription, TeamCardDetails, TeamCardHeader, TeamCardName } from "./team-card.styles";

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
            <TeamCardHeader>
                <TeamCardAvatar src={image}/>
                <div>
                    <TeamCardName>{name}</TeamCardName>
                    <TeamCardCreatedAt>Created {created_at}</TeamCardCreatedAt>
                </div>
            </TeamCardHeader>
            <TeamCardDescription/>
            <TeamCardDetails/>
        </TeamCardContainer>
    )
}

export default TeamCard;