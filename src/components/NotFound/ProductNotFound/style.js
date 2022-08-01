import styled from "styled-components";

export const ProductNotFoundContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  font-family: ${(props) => props.theme.fonts.title};
`;
