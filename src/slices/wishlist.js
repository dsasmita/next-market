import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  countWishlist: 0,
  wishlists: [],
};

const wishlistsSlice = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addWishlists: (state, { payload }) => {
      state.wishlists.push(payload);
      state.countWishlist = state.countWishlist + 1;
    },
  },
});

export const { addWishlists } = wishlistsSlice.actions;
export const wishlistsSelector = (state) => state.wishlists;
export default wishlistsSlice.reducer;
