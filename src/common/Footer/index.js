import { date } from "../../helpers/Date";
import { FooterContainer } from "./style";

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {date} -<a href="https://www.linkedin.com/in/gomeznahuel/" target="_blank" rel="noopener noreferrer"> Nahuel Gomez</a>
    </FooterContainer>
  );
};

export default Footer;
