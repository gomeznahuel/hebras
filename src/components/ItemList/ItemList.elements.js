import styled from "styled-components";

export const ItemListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 2em 0;
`;
