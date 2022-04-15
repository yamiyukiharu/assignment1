import { SideBarContainer, Spacer } from './side-bar.styles';
import {ReactComponent as LogoIcon} from '../../assets/sw-logo-white.svg'
import {ReactComponent as CampaignIcon} from '../../assets/icon-campaign.svg'
import {ReactComponent as TeamsIcon} from '../../assets/icon-teams.svg'
import {ReactComponent as LeadsIcon} from '../../assets/icon-leads.svg'
import {ReactComponent as ReportsIcon} from '../../assets/icon-reports.svg'
import {ReactComponent as HelpIcon} from '../../assets/icon-help.svg'

import SideBarButton from '../side-bar-button/side-bar-button.component';

const SideBar = () => {
    return(
        <SideBarContainer>
            <SideBarButton type='logo' icon={LogoIcon}/>
            <SideBarButton icon={CampaignIcon}/>
            <SideBarButton icon={TeamsIcon}/>
            <SideBarButton icon={LeadsIcon}/>
            <SideBarButton icon={ReportsIcon}/>
            <Spacer/>
            <SideBarButton icon={HelpIcon}/>
        </SideBarContainer>
    );
}

export default SideBar;