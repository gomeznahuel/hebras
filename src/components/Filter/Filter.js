import { RiArrowDownSLine } from "react-icons/ri";
import {
  FilterContainer,
  Navigation,
  NavigationSpan,
  NavigationContent,
  NavLink,
  CategoryFilter,
  CategoryFilterUL,
  CategoryFilterLI,
  CategoryFilterLink,
} from "./Filter.elements";

const Filter = () => {
  const linksArray = [
    {
      name: "All",
      path: "/",
    },
    {
      name: "Black Tea",
      path: "/black-tea",
    },
    {
      name: "Green Tea",
      path: "/green-tea",
    },
    {
      name: "Oolong Tea",
      path: "/oolong-tea",
    },
    {
      name: "White Tea",
      path: "/white-tea",
    },
  ];

  return (
    <FilterContainer>
      <CategoryFilter>
        <CategoryFilterUL>
          {linksArray.map((link) => (
            <CategoryFilterLI key={link.name}>
              <CategoryFilterLink href={link.path}>
                {link.name}
              </CategoryFilterLink>
            </CategoryFilterLI>
          ))}
        </CategoryFilterUL>
      </CategoryFilter>

      <Navigation>
        <NavigationSpan>
          Sort by <RiArrowDownSLine />
        </NavigationSpan>
        <NavigationContent>
          <NavLink href="/">Newest arrivals</NavLink>
          <NavLink href="/">Price: Low to High</NavLink>
          <NavLink href="/">Price: High to Low</NavLink>
        </NavigationContent>
      </Navigation>
    </FilterContainer>
  );
};

export default Filter;
