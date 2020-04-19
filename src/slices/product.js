import { createSlice } from "@reduxjs/toolkit";
import fetch from "isomorphic-unfetch";

export const initialState = {
  loadingProduct: false,
  hasErrorsProduct: false,
  product: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      state.loadingProduct = true;
    },
    getProductSuccess: (state, { payload }) => {
      state.product = payload;
      state.loadingProduct = false;
      state.hasErrorsProduct = false;
    },
    getProductFailure: (state) => {
      state.loadingProduct = false;
      state.hasErrorsProduct = true;
    },
  },
});

export const {
  getProduct,
  getProductSuccess,
  getProductFailure,
} = productSlice.actions;
export const productSelector = (state) => state.product;
export default productSlice.reducer;

export const fetchProduct = (id) => {
  return async (dispatch) => {
    dispatch(getProduct());

    try {
      const response = await fetch("http://165.22.49.0/products.php");
      const data = await response.json();

      const products = data.filter(function (productActive) {
        return productActive.productId === parseInt(id);
      });

      if (products.length === 1) {
        dispatch(getProductSuccess(products[0]));
      } else {
        dispatch(getProductFailure());
      }
    } catch (error) {
      dispatch(getProductFailure());
    }
  };
};
