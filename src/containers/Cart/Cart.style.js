import styled from "styled-components";

export const TableContainer = styled.table`
  width: 92%;
  font-size: 2rem;
  margin: 0.8em auto;
  font-family: var(--font-family-body);
  overflow: hidden;

  // Media query
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const THead = styled.thead`
  width: fit-content;
`;

export const TableTR = styled.tr`
  min-width: 100%;
`;

export const TableTH = styled.th`
  width: 20%;
  border: 1px solid black;
  background-color: var(--dark-gray);
  color: var(--dark-golden);
  padding: 0.5em 0;
`;

export const TableTD = styled.td`
  text-align: center;
  border: 1px solid black;
`;

export const TotalPriceContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
`;

export const TotalPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: var(--font-family-title);
  color: var(--dark-golden);
  background-color: var(--dark-gray);
  width: fit-content;
  padding: 0.5em 0.8em;
  border-radius: 0.5em;
  text-align: center;
  margin: 1em auto;
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
