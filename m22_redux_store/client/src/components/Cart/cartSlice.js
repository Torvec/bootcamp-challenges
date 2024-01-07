import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    addMultipleToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload];
    },
  },
});

export default cartSlice.reducer;
export const { toggleCart, addMultipleToCart } = cartSlice.actions;
