const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // to select the value from the select options lowest highest,a-z,z-a
      //   let userSortValue = document.getElementById("sort");
      //   console.log("user", userSortValue);
      //   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
     
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...action.payload];

      const sortingProduct = (a, b) => {
        if (state.sorting_value === "lowest") {
          return a.price - b.price;
        }

        if (state.sorting_value === "highest") {
          return b.price - a.price;
        }

        if (state.sorting_value === "a-z") {
          newSortData = tempSortProduct.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
        }
        if (state.sorting_value === "z-a") {
          newSortData = tempSortProduct.sort((b, a) =>
            a.name.localeCompare(b.name)
          );
        }
      };

      newSortData = tempSortProduct.sort(sortingProduct);
      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default filterReducer;
