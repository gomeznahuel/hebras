import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2.2rem;
    color: ${(props) => props.theme.colors.darkGolden};
  }

  span {
    color: ${(props) => props.theme.colors.darkGolden};
  }
`;
