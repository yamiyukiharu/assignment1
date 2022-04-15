import { MenuSettingsContainer, Greeting, ProfilePic, DropdownIcon } from "./menu-settings.styles";
import {ReactComponent as CarretIcon} from '../../assets/caret-down.svg'

const MenuSettings = () => {
    return (
        <MenuSettingsContainer>
            <Greeting> Hello, John </Greeting>
            <ProfilePic>
                
            </ProfilePic>
            <DropdownIcon>
                <CarretIcon/>
            </DropdownIcon>
        </MenuSettingsContainer>
    )
}

export default MenuSettings;