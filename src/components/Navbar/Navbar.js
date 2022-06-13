import { useState } from "react";
import { Wrapper, Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon,} from "./Navbar.elements";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <LogoContainer onClick={showMobileMenu ? () => setShowMobileMenu(false) : null}>
            #hebras
        </LogoContainer>

        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <VscClose /> : <VscThreeBars />}
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              Home
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              Products
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              About Us
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              Contact
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <BsCart3 />
            </MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
