import { LogoContainer } from "./Logo.elements";

const Logo = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <LogoContainer onClick={showMobileMenu ? () => setShowMobileMenu(false) : null}>
      #hebras
    </LogoContainer>
  );
};

export default Logo;
