import styled from "styled-components";
//import { button } from "../styles/button";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_Context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting } =
    useFilterContext();
  return (
    // in sort row we are making three columns
    <Wrapper className="sort-section">
      {/* 1st column */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column */}
      <div className="product-data">{`${filter_products.length} Products available`}</div>

      {/* 3rd column */}
      <div className="sort-selection">
       <form action="#">
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" className="sort-selection--style" onClick={sorting}>
          <option value="lowest">Price(lowest)</option>
          <option value="highest">Price(highest)</option>
          <option value="a-z">Price(a-z)</option>
          <option value="z-a">Price(z-a)</option>
        </select>

       </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .icon {
      font-size: 1.6rem;
    }
    .sort-btn {
      padding: 1rem 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .product-data {
    font-size: 3rem;
  }
  .sort-selection--style{
    padding:0.6rem;
  }
`;

export default Sort;
