import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productItemSlice = createSlice({
  name: "productItem",
  initialState,
  addToCart: () => {},
  updateCartQuantity: () => {},
});

export default productItemSlice.reducer;
export const { addToCart, updateCartQuantity } = productItemSlice.actions;
