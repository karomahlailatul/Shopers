import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByCategory = createAsyncThunk("ProductByCategory/getProductByCategory", async (name) => {
    const response = await axios
        .get(process.env.REACT_APP_API_BACKEND + "product/category/" + name)
        .catch((error) => {
            console.log(error);
        });
    const result = await response.data.data;
    return result;
});


const ProductByCategorySlice = createSlice({
    name: "ProductByCategory",
    initialState: {
        isLoading: false,
        isError: null,
        ProductByCategory: [],
    },
    extraReducers: {
        [getProductByCategory.pending]: (state) => {
            state.isLoading = true;
        },
        [getProductByCategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.ProductByCategory = action.payload;
        },
        [getProductByCategory.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default ProductByCategorySlice.reducer;
