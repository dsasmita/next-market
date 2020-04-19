import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countCart: 0,
  carts: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCarts: (state, { payload }) => {
      state.carts.push(payload);
      state.countCart = state.countCart + 1;
    },
  },
});

export const { addCarts } = cartsSlice.actions;
export const cartsSelector = (state) => state.carts;
export default cartsSlice.reducer;
