import { LayoutContainer } from "./Layout.styles";
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

export const Layout = ({ children }) => {
  const { showMobileMenu } = useContext(NavbarContext);

  return (
    <LayoutContainer style={{ display: showMobileMenu ? "none" : "block" }}>
      {children}
    </LayoutContainer>
  );
};
