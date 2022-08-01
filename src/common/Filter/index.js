import { FilterContainer, CategoryFilter, CategoryFilterUL, CategoryFilterLI } from "./style";
import { NavLink } from "react-router-dom";

const Filter = ({ categories }) => {
  return (
    <FilterContainer>
      <CategoryFilter>
        <CategoryFilterUL>

          <CategoryFilterLI>
            <NavLink to="/products">All</NavLink>
          </CategoryFilterLI>
          
          {categories.map((categorie, index) => (
            <CategoryFilterLI key={index}>
              <NavLink to={`/category/${categorie.description}`}>
                {categorie.description}
              </NavLink>
            </CategoryFilterLI>
          ))}
        </CategoryFilterUL>
      </CategoryFilter>
    </FilterContainer>
  );
};

export default Filter;