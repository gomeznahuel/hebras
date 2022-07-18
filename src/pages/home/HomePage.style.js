import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: var(--font-family-body);
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
    background-color: var(--dark-golden);
    color: var(--dark-gray);
    margin: 1em;
  }
`;
