import styled from "styled-components";

export const TableTR = styled.tr`
  min-width: 100%;
`;

export const TableTD = styled.td`
  text-align: center;
  border: 1px solid black;
`;

export const CartEmptyContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
`;

export const CartEmpty = styled.h1`
  font-family: var(--font-family-title);
  color: var(--dark-golden);
  text-align: center;
  margin: 1em auto;
`;
