import {
  ScIconContainer,
  ScNotificationBadge,
  ScNotificationIconContainer,
} from "./notification-icon.styles";
import { ReactComponent as MailIcon } from "../../assets/icon-mail.svg";

const NotificationIcon = ({ count }) => {
  return (
    <ScNotificationIconContainer>
      <ScNotificationBadge> {count} </ScNotificationBadge>
      <ScIconContainer>
        <MailIcon height="22" widht="22" />
      </ScIconContainer>
    </ScNotificationIconContainer>
  );
};

export default NotificationIcon;
