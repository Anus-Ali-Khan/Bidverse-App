import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const initialStateValue = { products: [], isLoading: false, error: null };
const PROD_URL = "/api/v1/product/";

const jwtToken = localStorage.getItem("token");
console.log(jwtToken);

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await axios.get(PROD_URL, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: { value: initialStateValue },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
