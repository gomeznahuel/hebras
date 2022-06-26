import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ImageContainer = styled.div`
    width: 50%;
    margin: 0 auto;
`; 

export const IDContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  justify-content: center;
  padding: 5em 0 0 0;

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    width: 80%;
  }
`;
