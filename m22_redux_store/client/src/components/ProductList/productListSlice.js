import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const productListSlice = createSlice({
  name: "productList",
  initialState,
  updateProducts: () => {},
});

export default productListSlice.reducer;
export const { updateProducts } = productListSlice.actions;
