import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const categoryMenuSlice = createSlice({
  name: "categoryMenu",
  initialState,
  updateCategories: () => {},
  updateCurrentCategory: () => {}
});

export default categoryMenuSlice.reducer;
export const { updateCategories, updateCurrentCategory } = categoryMenuSlice.actions;
