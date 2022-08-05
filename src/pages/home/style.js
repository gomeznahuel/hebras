import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fonts.body};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

export const SelectedProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: ${(props) => props.theme.fonts.body};
  padding: 1rem 0 0 0;

  h3 {
    font-size: 4rem;
    margin: 2rem 0;
    text-transform: uppercase;
  }
`;

export const SectionSelected = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
