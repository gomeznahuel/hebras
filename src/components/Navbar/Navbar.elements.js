import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    background-color: var(--base-color);
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 7rem;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5em 2.4rem;
  font-size: 1.8rem;
  transition: 0.5s all ease;
  font-family: var(--font-family-body);
  color: var(--text-color);
  cursor: pointer;

  &:hover {
    color: var(--base-color);
    background-color: var(--text-color-background);
    transition: 0.5s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: var(--text-color);
      margin-right: 0.5rem;
      font-size: 4em;
    }
  }
`;
