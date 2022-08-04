import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const OrderContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.darkGolden};
`;

export const Order = styled.div`
  max-width: 80%;
  font-family: ${(props) => props.theme.fonts.title};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 2em;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.darkGray};
  color: ${(props) => props.theme.colors.darkGolden};

  @media (max-width: 476px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const CopyContainer = styled.div`
  width: fit-content;
  background: ${(props) => props.theme.colors.darkGolden};
  color: ${(props) => props.theme.colors.darkGray};
  border-radius: 5px;
  padding: 1rem 3rem;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  cursor: pointer;
`;

export const OrderID = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const BackToShop = styled.div`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
`;
