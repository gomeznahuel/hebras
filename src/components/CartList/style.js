import styled from "styled-components";

export const TableContainer = styled.table`
  width: 92%;
  font-size: 2rem;
  margin: 0.8em auto;
  font-family: ${(props) => props.theme.fonts.body};
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
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.darkGolden};
  padding: 0.5em 0;
`;

export const TotalPriceContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const TotalPrice = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkGolden};
  background-color: ${(props) => props.theme.colors.darkGray};
  width: fit-content;
  padding: 0.5em 0.8em;
  border-radius: 0.5em;
  text-align: center;
  margin: 1em auto;
`;