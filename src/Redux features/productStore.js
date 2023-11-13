import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

export const productSlice = createSlice({
  name: "product",
  initialState: { value: initialStateValue },
  reducers: {
    allProducts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { allProducts } = productSlice.actions;
export default productSlice.reducer;
