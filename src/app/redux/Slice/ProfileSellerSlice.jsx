import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfileSeller = createAsyncThunk("ProfileSeller/getProfileSeller", async () => {
    // const response = await axios
    //     .get(process.env.REACT_APP_API_BACKEND + "product/seller/" )
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // const result = await response.data.data;
    // return result;
    try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("id");
        if (token && id) {
            const response = await axios.get(process.env.REACT_APP_API_BACKEND + "seller/" + id, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        }
    } catch (error) {
        // console.log(error.response.data.message);
        // toast.warning(error.response.data.message, { autoClose: 2000 });
    }
});

const ProfileSellerSlice = createSlice({
    name: "ProfileSeller",
    initialState: {
        isLoading: false,
        isError: null,
        ProfileSeller: [],
    },
    extraReducers: {
        [getProfileSeller.pending]: (state) => {
            state.isLoading = true;
        },
        [getProfileSeller.fulfilled]: (state, action) => {
            state.isLoading = false;

            state.ProfileSeller = action.payload;
            // console.log(action.payload.data[0].id)
            if (action.payload !== undefined) {
                state.seller_id = action.payload.data[0].id;
                state.seller_user_id = action.payload.data[0].user_id;
                state.seller_name_store = action.payload.data[0].name_store;
                state.seller_logo = action.payload.data[0].logo;
                state.seller_address = action.payload.data[0].address;
                state.seller_description = action.payload.data[0].description;
                state.seller_commision = action.payload.data[0].commision;
                state.seller_created_on = action.payload.data[0].created_on;
                state.seller_updated_on = action.payload.data[0].updated_on;
                state.seller_phone = action.payload.data[0].phone;
            }
            // console.log(action.payload)
        },
        [getProfileSeller.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
        },
    },
});

export default ProfileSellerSlice.reducer;
