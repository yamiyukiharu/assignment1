import { Outlet } from "react-router-dom";
import NavBar from "../nav-bar/nav-bar.component";
import SideBar from "../side-bar/side-bar.component";
import { ScLayoutContainer, ScPage } from "./layout.styles";

export const Layout = () => {
  return (
    <ScLayoutContainer>
      <SideBar />
      <ScPage>
        <NavBar />
        <Outlet />
      </ScPage>
    </ScLayoutContainer>
  );
};
