import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.darkGolden};
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.title};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.textHover};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
