import { ButtonContainer } from "./Button.elements";

const Button = ({ type, handleClick, placeholder, textButton }) => {
  return (
    <ButtonContainer type={type} onClick={handleClick} placeholder={placeholder}>
      {textButton}
    </ButtonContainer>
  );
};

export default Button;
