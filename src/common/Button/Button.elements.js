import styled from "styled-components";

export const ButtonContainer = styled.button`
  background: var(--background-color);
  color: var(--text-color-hover);
  border: none;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1.2rem;
  font-family: var(--font-family-title);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--text-color-hover);
    background: var(--text-color);
    color: var(--base-color);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
