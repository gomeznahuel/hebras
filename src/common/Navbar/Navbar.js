import { useState } from "react";
import { Wrapper, Menu, MenuItem, MenuItemCartWrapper, MobileIcon } from "./Navbar.elements";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { menuNavigation } from "../../services/Data";
import { NavLink } from "react-router-dom";
import CartWidget from "../../components/CartWidget/CartWidget";
import Logo from "../../components/Logo/Logo";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Wrapper>
      <NavLink to="/">
        <Logo showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      </NavLink>
      <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <VscClose /> : <VscThreeBars />}
      </MobileIcon>

      <Menu open={showMobileMenu}>
        {menuNavigation.map(({ name, link }, index) => (
          <MenuItem key={index} onClick={() => setShowMobileMenu(false)}>
            <NavLink to={link}>{name}</NavLink>
          </MenuItem>
        ))}

        <MenuItemCartWrapper onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <CartWidget />
        </MenuItemCartWrapper>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
