import React from "react";
import styled from "styled-components";
import FilterSection from "./component/FilterSection";
import Sort from "./component/Sort";
import ProductList from "./component/ProductList";
import { useFilterContext } from "./context/filter_Context";


const Products = () => {
  // making two columns
  // 1st column has FilterSection
  // 2 column has two =1)sort row 2)Product view row
const {filter_products}=useFilterContext();
console.log("filterProducts "+filter_products);
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        {/* 2nd column */}
        <section className="product-view--sort">
          {/* 1st row */}
          <div>
            <Sort className="sort-filter" />
          </div>

          {/* 2nd row */}
          <div>
            <ProductList className="main-product" />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
