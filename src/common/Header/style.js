import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 7.8rem;
  padding: 0 2em;
  color: ${(props) => props.theme.colors.darkGolden};
  background-color: ${(props) => props.theme.colors.darkGray};
`;
