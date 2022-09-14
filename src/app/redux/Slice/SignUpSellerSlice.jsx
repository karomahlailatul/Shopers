import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const postSignUpSeller = createAsyncThunk("SignUpSeller/postSignUpSeller", async (dataSeller) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API_BACKEND + "seller/on-register", JSON.stringify(dataSeller), {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data.statusCode !== 201) {
      toast.warning(response.data.message, { autoClose: 2000  ,toastId: "warningSignUpSeller" });
    }

    return response.data;
  } catch (error) {
    // console.log(error.response.data.message);
    toast.warning(error.response.data.message, { autoClose: 2000  ,toastId: "errorSignUpSeller" });
  }
});

const SignUpSellerSlice = createSlice({
  name: "SignUpSeller",
  initialState: {
    isLoading: false,
    isError: null,
    status: "idle",
    SignUpSeller: [],
  },
  extraReducers: {
    [postSignUpSeller.pending]: (state) => {
      state.isLoading = true;
      state.status = "loading";
    },
    [postSignUpSeller.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.SignUpSeller = action.payload;
      state.status = "success";
    },
    [postSignUpSeller.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error;
      state.status = "failed";
    },
  },
});

export default SignUpSellerSlice.reducer;
