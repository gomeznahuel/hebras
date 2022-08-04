import { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <NavbarContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
