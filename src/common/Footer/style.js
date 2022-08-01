import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 1.4rem;
  padding: 1em;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.darkGolden};
`;
