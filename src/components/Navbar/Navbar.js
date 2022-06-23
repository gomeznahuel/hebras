import { useState } from "react";
import { Wrapper, Menu, MenuItem, MenuItemLink, MenuItemCart, MenuItemCartWrapper, MobileIcon } from "./Navbar.elements";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Wrapper>
      <Logo showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />

      <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
        {showMobileMenu ? <VscClose /> : <VscThreeBars />}
      </MobileIcon>

      <Menu open={showMobileMenu}>
        <MenuItem>
          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
            /Home
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
            /Products
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
            /About Us
          </MenuItemLink>
        </MenuItem>
        <MenuItem>
          <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
            /Contact
          </MenuItemLink>
        </MenuItem>
        <MenuItemCartWrapper>
          <MenuItemCart onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <CartWidget />
          </MenuItemCart>
        </MenuItemCartWrapper>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
