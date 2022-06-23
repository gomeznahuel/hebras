import { RiArrowDownSLine } from "react-icons/ri";
import { FilterContainer, Navigation, NavigationSpan, NavigationContent, NavLink, CategoryFilter, CategoryFilterUL, CategoryFilterLI, CategoryFilterLink } from "./Filter.elements";
import { categoryNav } from "../../services/Data";

const Filter = () => {
  return (
    <FilterContainer>
      <CategoryFilter>
        <CategoryFilterUL>
          {categoryNav.map(({ name, path }, index) => (
            <CategoryFilterLI key={name}>
              <CategoryFilterLink href={path}>
                {name}
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
