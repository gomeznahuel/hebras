import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  font-family: var(--font-family-body);
  font-size: 1.6rem;
  color: var(--text-color);
  background-color: rgba(128, 128, 128, 0.377);
`;

export const CategoryFilter = styled.div`
  width: 50%;
`;

export const CategoryFilterUL = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CategoryFilterLI = styled.li`
  text-align: center;

  :first-letter {
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }
`;

export const NavigationSpan = styled.span`
  margin: 0;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    border-radius: 4px;
  }
`;

export const NavigationContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  min-width: 12em;
  width: fit-content;
  padding: 1.2rem 1.6rem;
  border-radius: 4px;
  z-index: 1;

  a {
    color: black;

    &:hover {
      border-left: 2px solid var(--text-color);
      padding-left: 0.5rem;
      /* margin-left: 0.5rem; */
    }
  }
`;

export const Navigation = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    & ${NavigationContent} {
      display: block;
      background-color: white;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      & ${NavigationContent} {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-family: "Saira", sans-serif;
        color: #737380;
        margin-bottom: 0.4rem;
        cursor: pointer;
        color: var(--text-color);
        font-family: var(--font-family-body);
      }
    }
  }
`;
