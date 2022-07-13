import { ButtonContainer } from "./Button.styles";

const Button = ({ type, textButton, handleClick, placeholder, width, height, margin, padding, fontSize, disabled }) => {;
  return (
    <ButtonContainer disabled={disabled} type={type} onClick={handleClick} placeholder={placeholder} style={{ width, height, margin, padding, fontSize }}>
      {textButton}
    </ButtonContainer>
  );
};

export default Button;
