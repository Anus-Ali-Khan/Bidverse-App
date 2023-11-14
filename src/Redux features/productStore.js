import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialStateValue = { products: "", isLoading: false, error: null };
const PROD_URL = "api/v1/product/";

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await axios.get(PROD_URL, {
      token: localStorage.getItem("token"),
    });
    return response;
  } catch (err) {
    return;
  }
});

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
