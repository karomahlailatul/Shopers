import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductBySearch = createAsyncThunk("ProductBySearch/getProductBySearch", async (valueSender) => {

    const response = await
        // (keyword 
        // !== null ? \
        axios
            .get(process.env.REACT_APP_API_BACKEND + "product?" + valueSender)
            //  .get(process.env.REACT_APP_API_BACKEND + "product?search=" + search + "&sortby=name&sort=" + sort + "&page=1&limit=24")
            .catch((error) => {
                console.log(error);
            })
    // : 
    // axios
    //     .get(process.env.REACT_APP_API_BACKEND + "product")
    //     //  .get(process.env.REACT_APP_API_BACKEND + "product?search=" + search + "&sortby=name&sort=" + sort + "&page=1&limit=24")
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // );

    const result = await response.data;
    return result;
});

const ProductBySearchSlice = createSlice({
    name: "ProductBySearch",
    initialState: {
        isLoading: false,
        isError: null,
        ProductBySearch: [],
    },
    extraReducers: {
        [getProductBySearch.pending]: (state) => {
            state.isLoading = true;
        },
        [getProductBySearch.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.ProductBySearch = action.payload.data;
            state.statusCode = action.payload.statusCode;
            state.pagination_currentPage = action.payload.pagination.currentPage;
            state.pagination_totalData = action.payload.pagination.totalData;
            state.pagination_limit = action.payload.pagination.limit;
            state.pagination_totalPage = action.payload.pagination.totalPage;
            // console.log(action.payload)
        },
        [getProductBySearch.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default ProductBySearchSlice.reducer;
