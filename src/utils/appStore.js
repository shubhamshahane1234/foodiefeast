import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import dishDataReducer from "./dishData";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    dish: dishDataReducer,
  },
});

export default appStore;
