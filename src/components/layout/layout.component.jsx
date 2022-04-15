import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar/nav-bar.component";
import SideBar from "../side-bar/side-bar.component";
import { Content, LayoutContainer, Page } from "./layout.styles";

export const Layout = () => {
    return (
      <LayoutContainer>
        <SideBar/>  
        <Page>
          <NavBar/>  
          <Outlet/>        
        </Page>      
      </LayoutContainer>
    )
  }