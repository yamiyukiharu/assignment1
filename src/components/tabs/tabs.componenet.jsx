import { ScTabsContainer, ScTabContainer } from "./tabs.styles";
import { useSelector, useDispatch } from "react-redux";
import { setTeamsCategory } from "../../store/teams/teams.actions";
import { selectTeamsCategory } from "../../store/teams/teams.selector";

const Tabs = ({ tabNames }) => {
  return (
    <ScTabsContainer>
      {tabNames.map((tabName, idx) => (
        <Tab key={idx} tabName={tabName} />
      ))}
    </ScTabsContainer>
  );
};

const Tab = ({ tabName }) => {
  const dispatch = useDispatch();
  const category = useSelector(selectTeamsCategory);

  const tabClickHandler = () => {
    dispatch(setTeamsCategory(tabName));
  };

  return (
    <ScTabContainer isSelected={category === tabName} onClick={tabClickHandler}>
      {tabName}
    </ScTabContainer>
  );
};

export default Tabs;
