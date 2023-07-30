import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("ecommerce/fetchposts", async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return data;
});

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    fetchProducts: (state, action) => {
      // state.products = [...state.products, actioon.payload];
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.products.push(action.payload.slice(0, 30));
        // fetchProducts(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.products = state.error.message;
      });
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
