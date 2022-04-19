import { ScSideBarButtonContainer } from "./side-bar-button.styles";
import { Link, useLocation } from "react-router-dom";

const SideBarButton = ({ icon, path, ...props }) => {
  const SideBarButtonIcon = icon;

  let location = useLocation();
  const active = location.pathname === "/" + path;

  return (
    <Link to={path}>
      <ScSideBarButtonContainer active={active} {...props}>
        <SideBarButtonIcon height="34" width="34" />
      </ScSideBarButtonContainer>
    </Link>
  );
};

export default SideBarButton;
