import { ButtonContainer } from "./Button.elements";

const Button = ({ type, handleClick, placeholder, textButton, width, height, margin }) => {;
  return (
    <ButtonContainer type={type} onClick={handleClick} placeholder={placeholder} style={{ width, height, margin }}>
      {textButton}
    </ButtonContainer>
  );
};

export default Button;
