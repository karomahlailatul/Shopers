import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearchProduct = createAsyncThunk("SearchProduct/getSearchProduct", async (valueSender) => {

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

const SearchProductSlice = createSlice({
    name: "SearchProduct",
    initialState: {
        isLoading: false,
        isError: null,
        SearchProduct: [],
    },
    extraReducers: {
        [getSearchProduct.pending]: (state) => {
            state.isLoading = true;
        },
        [getSearchProduct.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.SearchProduct = action.payload.data;
            state.statusCode = action.payload.statusCode;
            state.pagination_currentPage = action.payload.pagination.currentPage;
            state.pagination_totalData = action.payload.pagination.totalData;
            state.pagination_limit = action.payload.pagination.limit;
            state.pagination_totalPage = action.payload.pagination.totalPage;
            // console.log(action.payload)
        },
        [getSearchProduct.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default SearchProductSlice.reducer;
