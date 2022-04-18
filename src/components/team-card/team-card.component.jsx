import { useDispatch, useSelector } from "react-redux";
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
import { setTeamsFavourite } from '../../store/teams/teams.actions';
import { selectTeamsArray } from '../../store/teams/teams.selector';

const TeamCard = ({ team }) => {
  const {
    id,
    name,
    image,
    description,
    campaigns_count,
    leads_count,
    is_favorited,
    is_archived,
    created_at,
  } = team;

  const dispatch = useDispatch();
  const teams = useSelector(selectTeamsArray)

  const favoriteHandler = () => {
    dispatch(setTeamsFavourite(teams,id,!is_favorited))
  }

  return (
    <ScTeamCardContainer isArchived={is_archived}>
      <ScHeader>
        <ScHeaderRow>
          <ScAvatar src={image} />
          <ScNameContainer>
            <ScName>{name}</ScName>
            {
              created_at && <ScCreatedAt>Created {created_at}</ScCreatedAt>
            }
          </ScNameContainer>
          {
            !is_archived && <ScFavouriteStarIcon 
                                isFavorited={is_favorited}
                                onClick={favoriteHandler}/>
          }
          
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
