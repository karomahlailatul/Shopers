import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHomeProductNew = createAsyncThunk("HomeProductNew/getHomeProductNew", async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_BACKEND + "product?sortby=created_on&sort=desc&page=1&limit=24", {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const HomeProductNewSlice = createSlice({
  name: "HomeProductNew",
  initialState: {
    isLoading: false,
    isError: null,
    HomeProductNew: [],
  },
  extraReducers: {
    [getHomeProductNew.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomeProductNew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.HomeProductNew = action.payload;
    },
    [getHomeProductNew.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
  },
});

export default HomeProductNewSlice.reducer;
