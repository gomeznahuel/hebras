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
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkGolden};
  text-align: center;
  margin: 1em auto;
`;
