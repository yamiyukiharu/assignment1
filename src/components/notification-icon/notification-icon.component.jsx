import { Icon, NotificationBadge, NotificationIconContainer } from "./notification-icon.styles";
import {ReactComponent as IconSvg} from '../../assets/icon-mail.svg'

const NotificationIcon = ({count}) => {
    return(
        <NotificationIconContainer>

            <NotificationBadge> {count} </NotificationBadge>
            <Icon>
                <IconSvg height='22' widht='22'/>    
            </Icon>
        </NotificationIconContainer>
    )

}

export default NotificationIcon;