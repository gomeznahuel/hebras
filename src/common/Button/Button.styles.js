import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--dark-gray);
  color: var(--dark-golden);
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1.2rem;
  font-family: var(--font-family-title);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: var(--text-hover);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
