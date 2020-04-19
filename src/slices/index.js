import { combineReducers } from "redux";

import productReducer from "./product.js";
import productsReducer from "./products.js";
import cartsReducer from "./carts.js";
import wishlistsReducer from "./wishlist.js";

const rootReducer = combineReducers({
  product: productReducer,
  products: productsReducer,
  carts: cartsReducer,
  wishlists: wishlistsReducer,
});

export default rootReducer;
