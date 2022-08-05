import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.darkGray};
  padding: 1em;
  border-radius: 5px;
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
  color: ${(props) => props.theme.colors.darkGolden};
  background-color: #deebe8;

  @media (max-width: 476px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const BackToShop = styled.div`
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
`;