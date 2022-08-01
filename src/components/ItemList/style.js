import styled from "styled-components";

export const ItemListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2em;
  overflow: hidden;
`;
