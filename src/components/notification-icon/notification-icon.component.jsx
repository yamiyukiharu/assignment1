import { Icon, NotificationBadge, NotificationIconContainer } from "./notification-icon.styles";
import {ReactComponent as IconSvg} from '../../assets/icon-mail.svg'

const NotificationIcon = () => {
    return(
        <NotificationIconContainer>

            <NotificationBadge> 3 </NotificationBadge>
            <Icon>
                <IconSvg height='22' widht='22'/>    
            </Icon>
        </NotificationIconContainer>
    )

}

export default NotificationIcon;