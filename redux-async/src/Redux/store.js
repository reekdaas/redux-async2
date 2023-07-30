import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice/productSlice";
import cartSlice from "./Slice/cartSlice";

export default configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});
