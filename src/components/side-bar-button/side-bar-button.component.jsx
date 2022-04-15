import { SideBarButtonContainer } from "./side-bar-button.styles";


const SideBarButton = ({icon, ...props}) => {
    const SideBarButtonIcon = icon;

    return (
        <SideBarButtonContainer {...props}>
            <SideBarButtonIcon height='34' width='34'/>
        </SideBarButtonContainer>
    );
}

export default SideBarButton;