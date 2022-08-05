import styled from "styled-components";

export const CopyContainer = styled.div`
  width: fit-content;
  background: ${(props) => props.theme.colors.darkGolden};
  color: ${(props) => props.theme.colors.darkGray};
  border: 1px solid ${(props) => props.theme.colors.darkGray};
  border-radius: 5px;
  padding: 1rem 3rem;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;

  @media (max-width: 576px) {
    width: 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    flex-direction: column;
    gap: 0.5em;
    margin: 0;
  }
`;

export const OrderID = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
