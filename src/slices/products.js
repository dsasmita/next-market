import { createSlice } from "@reduxjs/toolkit";
import fetch from "isomorphic-unfetch";

export const initialState = {
  loading: false,
  hasErrors: false,
  searchKeyword: "",
  categoryFilter: "",
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getProductsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    setSearchKeyword: (state, { payload }) => {
      state.searchKeyword = payload;
    },
    setCategoryFilter: (state, { payload }) => {
      state.categoryFilter = payload;
    },
  },
});

export const {
  getProducts,
  getProductsSuccess,
  getProductsFailure,
  setSearchKeyword,
  setCategoryFilter,
} = productsSlice.actions;
export const productsSelector = (state) => state.products;
export default productsSlice.reducer;

export const fetchProducts = (props) => {
  const { searchKeyword, categoryFilter } = props;
  return async (dispatch) => {
    dispatch(getProducts());

    try {
      const response = await fetch("http://165.22.49.0/products.php");
      const data = await response.json();

      let filteredProduct = data.filter(function (product) {
        return (
          product.productName
            .toLowerCase()
            .indexOf(searchKeyword.toLowerCase()) !== -1
        );
      });

      if (categoryFilter != "") {
        filteredProduct = data.filter(function (product) {
          return (
            product.productCategory
              .toLowerCase()
              .indexOf(categoryFilter.toLowerCase()) !== -1
          );
        });
      }

      dispatch(getProductsSuccess(filteredProduct));
    } catch (error) {
      dispatch(getProductsFailure());
    }
  };
};
