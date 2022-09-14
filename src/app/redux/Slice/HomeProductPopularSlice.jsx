import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHomeProductPopular = createAsyncThunk("HomeProductPopular/getHomeProductPopular", async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_BACKEND + "product/popular", {
      headers: { "Content-Type": "application/json" },
    });
    return response.data.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
});

const HomeProductPopularSlice = createSlice({
  name: "HomeProductPopular",
  initialState: {
    isLoading: false,
    isError: null,
    HomeProductPopular: [],
  },
  extraReducers: {
    [getHomeProductPopular.pending]: (state) => {
      state.isLoading = true;
    },
    [getHomeProductPopular.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.HomeProductPopular = action.payload;
    },
    [getHomeProductPopular.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
    },
  },
});

export default HomeProductPopularSlice.reducer;
