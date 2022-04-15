
import MenuSettings from "../menu-settings/menu-settings.component";
import NotificationIcon from "../notification-icon/notification-icon.component";
import { NavBarContainer, AppName, Divider, Title, Spacer } from "./nav-bar.styles";

const NavBar = () => {
    return (
        <NavBarContainer>
            <AppName>NARWHAL</AppName>
            <Divider/>
            <Title>Teams</Title>
            <Spacer/>
            <NotificationIcon/>
            <MenuSettings/>
        </NavBarContainer>
    )
}

export default NavBar;