import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import searchReducer from "./searchSlice";


/* creating store in order to store slices and performing actions */
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    search: searchReducer,
  },
});

export default store;
