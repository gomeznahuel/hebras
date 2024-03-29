import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const IDContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: flex-start;
  padding: 2em;
  font-family: ${(props) => props.theme.fonts.title};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 2em;
    text-align: center;
    align-items: center;
  }
`;

export const ItemDetailTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 0.2em;
`;

export const ItemDetailSpan = styled.span`
  font-size: 1.5rem;
  margin-bottom: 1em;
  width: 80%;
`;
