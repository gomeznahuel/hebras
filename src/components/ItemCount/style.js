import styled from "styled-components";

export const ItemCountContainer = styled.div`
  width: fit-content;
`;

export const CountContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3em;
  margin-bottom: 0.4em;

  button {
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const Count = styled.span`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
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

export const OutOfStock = styled.div`
  background-color: red;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
  padding: .8em;
  text-align: center;
  width: 100%;
  border-radius: 0.5em;
  margin-bottom: .4em;
`;
