import { useContext } from "react";
import { Wrapper, Menu, MenuItem, MenuItemCartWrapper, MobileIcon } from "./Navbar.styles";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { menuNavigation } from "../../services/Data";
import { NavLink } from "react-router-dom";
import CartWidget from "../../components/CartWidget";
import Logo from "../../components/Logo";
import { NavbarContext } from "../../context/NavbarContext";

const Navbar = () => {
  const { showMobileMenu, setShowMobileMenu } = useContext(NavbarContext);

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
