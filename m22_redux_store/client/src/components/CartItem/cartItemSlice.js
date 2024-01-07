import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    updateCartQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.purchaseQuantity = action.payload.purchaseQuantity;
      }
    },
  },
});

export default cartItemSlice.reducer;
export const { removeFromCart, updateCartQuantity } = cartItemSlice.actions;
