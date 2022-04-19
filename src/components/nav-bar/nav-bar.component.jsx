import NotificationIcon from "../notification-icon/notification-icon.component";
import { ReactComponent as CarretIcon } from "../../assets/caret-down.svg";
import {
  ScNavBarContainer,
  ScAppName,
  ScDivider,
  ScTitle,
  ScMenuSettingsContainer,
  ScGreeting,
  ScProfilePic,
} from "./nav-bar.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <ScNavBarContainer>
      <ScAppName>NARWHAL</ScAppName>
      <ScDivider />
      <ScTitle>Teams</ScTitle>
      <NotificationIcon count={currentUser.notifications_count} />
      <ScMenuSettingsContainer>
        <ScGreeting> Hello, {currentUser.name} </ScGreeting>
        <ScProfilePic src={currentUser.avatar} />
        <CarretIcon />
      </ScMenuSettingsContainer>
    </ScNavBarContainer>
  );
};

export default NavBar;
