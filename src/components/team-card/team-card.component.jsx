import {
  ScEmptyCardFiller,
  ScAvatar,
  ScTeamCardContainer,
  ScCreatedAt,
  ScDescription,
  ScDetails,
  ScHeader,
  ScName,
  ScNameContainer,
  ScFavouriteStarIcon,
  ScCampaignIcon,
  ScLeadsIcon,
  ScHeaderRow,
  ScMarketingDataContainer,
  ScMarketingData,
} from "./team-card.styles";

const TeamCard = ({ team }) => {
  const {
    id,
    name,
    image,
    description,
    campaigns_count,
    leads_count,
    is_favoured,
    is_archived,
    created_at,
  } = team;

  return (
    <ScTeamCardContainer>
      <ScHeader>
        <ScHeaderRow>
          <ScAvatar src={image} />
          <ScNameContainer>
            <ScName>{name}</ScName>
            {
              created_at && <ScCreatedAt>Created {created_at}</ScCreatedAt>
            }
          </ScNameContainer>
          <ScFavouriteStarIcon />
        </ScHeaderRow>
        <ScDescription>{description} </ScDescription>
      </ScHeader>
      <ScMarketingDataContainer>
        <ScMarketingData>
          <ScCampaignIcon />
          <span>{campaigns_count} Campaigns</span>
        </ScMarketingData>
        <ScMarketingData>
          <ScLeadsIcon />
          <span>{leads_count} Leads</span>
        </ScMarketingData>
      </ScMarketingDataContainer>
    </ScTeamCardContainer>
  );
};

export default TeamCard;
