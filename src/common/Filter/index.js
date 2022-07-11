import { RiArrowDownSLine } from "react-icons/ri";
import { FilterContainer, Navigation, NavigationSpan, NavigationContent, CategoryFilter, CategoryFilterUL, CategoryFilterLI } from "./Filter.elements";
import { NavLink } from "react-router-dom";

const Filter = ({ categories }) => {
  return (
    <FilterContainer>
      <CategoryFilter>
        <CategoryFilterUL>

          <CategoryFilterLI>
            <NavLink to="/">All</NavLink>
          </CategoryFilterLI>
          
          {categories.map((categorie) => (
            <CategoryFilterLI key={categorie}>
              <NavLink to={`/category/${categorie}`}>
                {categorie}
              </NavLink>
            </CategoryFilterLI>
          ))}
        </CategoryFilterUL>
      </CategoryFilter>

      <Navigation>
        <NavigationSpan>
          Sort by <RiArrowDownSLine />
        </NavigationSpan>
        <NavigationContent>
          <NavLink to="/">Newest arrivals</NavLink>
          <NavLink to="/">Price: Low to High</NavLink>
          <NavLink to="/">Price: High to Low</NavLink>
        </NavigationContent>
      </Navigation>
    </FilterContainer>
  );
};

export default Filter;
