import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategoryProduct = createAsyncThunk("CategoryProduct/getCategoryProduct", async (name) => {
    const response = await axios
        .get(process.env.REACT_APP_API_BACKEND + "product/category/" + name)
        .catch((error) => {
            console.log(error);
        });
    const result = await response.data.data;
    return result;
});


const CategoryProductSlice = createSlice({
    name: "CategoryProduct",
    initialState: {
        isLoading: false,
        isError: null,
        CategoryProduct: [],
    },
    extraReducers: {
        [getCategoryProduct.pending]: (state) => {
            state.isLoading = true;
        },
        [getCategoryProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.CategoryProduct = action.payload;
        },
        [getCategoryProduct.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default CategoryProductSlice.reducer;
