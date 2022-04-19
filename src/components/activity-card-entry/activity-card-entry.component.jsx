import {
  ScActionContainer,
  ScActivityEntryContainer,
  ScBoldText,
  ScCreatedAt,
} from "./activity-card-entry.styles";

const frameActionSentence = (action, target) => {
  switch (action) {
    case "increased_quota":
      return (
        <span>
          <span>increased </span>
          <ScBoldText>{target}'s </ScBoldText>
          <span>quota.</span>
        </span>
      );
    case "added_leads":
      return (
        <span>
          <span>added new leads to </span>
          <ScBoldText>{target}.</ScBoldText>
        </span>
      );
    case "archived_team":
      return (
        <span>
          <span>archived the team </span>
          <ScBoldText>{target}.</ScBoldText>
        </span>
      );
    default:
      return <span></span>;
  }
};

const ActivityCardEntry = ({ activity }) => {
  const { person, action, target, created_at } = activity;

  const { name, avatar } = person;

  return (
    <ScActivityEntryContainer>
      <img src={avatar} alt="avatar" />
      <ScActionContainer>
        <ScBoldText> {name} </ScBoldText> {frameActionSentence(action, target)}
        <ScCreatedAt>{created_at}</ScCreatedAt>
      </ScActionContainer>
    </ScActivityEntryContainer>
  );
};

export default ActivityCardEntry;
