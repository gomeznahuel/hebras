import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.body};
`;

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

export const SelectedProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fonts.body};

  h3 {
    font-size: 4rem;
    margin: 2rem 0;
    text-transform: uppercase;
  }
`;
