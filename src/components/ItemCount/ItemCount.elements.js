import styled from "styled-components";

export const ItemCountContainer = styled.div`
  width: 30em;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ItemCountButton = styled.button`
  width: 12rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 1em;
  font-size: 2em;
  font-weight: bold;
`;

export const Count = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: .4em;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 1em;
  font-size: 2em;
  font-weight: bold;
  margin-top: 1em;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
