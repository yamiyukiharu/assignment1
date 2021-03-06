import { ScSideBarContainer, ScSpacer } from "./side-bar.styles";
import { ReactComponent as LogoIcon } from "../../assets/sw-logo-white.svg";
import { ReactComponent as CampaignIcon } from "../../assets/icon-campaign.svg";
import { ReactComponent as TeamsIcon } from "../../assets/icon-teams.svg";
import { ReactComponent as LeadsIcon } from "../../assets/icon-leads.svg";
import { ReactComponent as ReportsIcon } from "../../assets/icon-reports.svg";
import { ReactComponent as HelpIcon } from "../../assets/icon-help.svg";

import SideBarButton from "../side-bar-button/side-bar-button.component";
import { useEffect, useRef } from "react";

const SideBar = () => {
  const ref = useRef()
  useEffect(() => {
    ref.current.click();
  },[])

  return (
    <ScSideBarContainer>
      <SideBarButton path="home" type="logo" icon={LogoIcon} />
      <SideBarButton path="campaigns" icon={CampaignIcon} />
      <SideBarButton refer={ref} path="teams" icon={TeamsIcon} />
      <SideBarButton path="leads" icon={LeadsIcon} />
      <SideBarButton path="reports" icon={ReportsIcon} />
      <ScSpacer />
      <SideBarButton path="help" icon={HelpIcon} />
    </ScSideBarContainer>
  );
};

export default SideBar;
