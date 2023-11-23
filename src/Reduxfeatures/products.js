import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";

const PROD_URL = "/api/v1/product/";

const initialStateValue = { products: [], isLoading: false, error: null };

const jwtToken = localStorage.getItem("token");
// console.log(jwtToken);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
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
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: initialStateValue,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
      // console.log("Data from api", action.payload.products);
      // console.log("redux data", state.products);
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
