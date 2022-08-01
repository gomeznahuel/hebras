import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkGolden};

  &:hover {
    cursor: pointer;
  }
`;
