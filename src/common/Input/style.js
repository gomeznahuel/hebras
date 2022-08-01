import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  padding: .4em 0;
  font-size: 2rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: .6em;

  &:focus {
    border-bottom: 2px solid #000;
  }
`;
