import NotificationIcon from "../notification-icon/notification-icon.component";
import {ReactComponent as CarretIcon} from '../../assets/caret-down.svg'
import {
  NavBarContainer,
  AppName,
  Divider,
  Title,
  MenuSettingsContainer,
  Greeting,
  ProfilePic,
  DropdownIcon,
} from "./nav-bar.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from '../../store/user/user.selector'

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser)

  return (
    <NavBarContainer>
      <AppName>NARWHAL</AppName>
      <Divider />
      <Title>Teams</Title>
      <NotificationIcon count={currentUser.notifications_count}/>
      <MenuSettingsContainer>
        <Greeting> Hello, {currentUser.name} </Greeting>
        <ProfilePic src={currentUser.avatar}/>
        <DropdownIcon>
          <CarretIcon />
        </DropdownIcon>
      </MenuSettingsContainer>
    </NavBarContainer>
  );
};

export default NavBar;
