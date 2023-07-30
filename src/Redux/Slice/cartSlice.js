import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isProcutInCart = state.cart.find(
        (data) => data.id === action.payload
      );
      if (isProcutInCart) {
        state.cart = state.cart.map((data) =>
          data.id === action.payload
            ? { ...data, quantity: data.quantity + 1 }
            : data
        );
      } else state.cart = [...state.cart, { id: action.payload, quantity: 1 }];
    },
    removeFromCart: (state, action) => {
      const isProcutInCart = state.cart.find(
        (data) => data.id === action.payload
      );

      if (isProcutInCart) {
        // console.log(isProcutInCart);
        if (isProcutInCart.quantity === 0) {
          state.cart = state.cart.filter((data) => data.id !== action.payload);
        } else
          state.cart = state.cart.map((data) =>
            data.id === action.payload
              ? { ...data, quantity: data.quantity - 1 }
              : data
          );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
