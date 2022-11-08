import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductBySeller = createAsyncThunk("ProductBySeller/getProductBySeller", async (id) => {
    const response = await axios
        .get(process.env.REACT_APP_API_BACKEND + "product/seller/" + id)
        .catch((error) => {
            console.log(error);
        });
    const result = await response.data.data;
    return result;
});


const ProductBySellerSlice = createSlice({
    name: "ProductBySeller",
    initialState: {
        isLoading: false,
        isError: null,
        ProductBySeller: [],
    },
    extraReducers: {
        [getProductBySeller.pending]: (state) => {
            state.isLoading = true;
        },
        [getProductBySeller.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.ProductBySeller = action.payload;
        },
        [getProductBySeller.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default ProductBySellerSlice.reducer;
