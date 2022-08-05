import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    &:hover {
      opacity: 0.7;
    }
  }

  button {
    background-color: ${(props) => props.theme.colors.darkGolden};
    color: ${(props) => props.theme.colors.darkGray};
    margin: 1em;
  }
`;