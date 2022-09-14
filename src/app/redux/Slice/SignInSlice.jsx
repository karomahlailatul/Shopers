import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router";

export const postSignIn = createAsyncThunk("SignIn/postSignIn", async (data) => {
    // const goTo = useNavigate();
    try {

        const response = await axios.post(process.env.REACT_APP_API_BACKEND + "users/login", JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
        });

        if (response.data.statusCode === 201) {
            toast.success("Sign In Success. Welcome " + response.data.data.name, { autoClose: 2000 });
            localStorage.setItem("token", response.data.data.token);
            localStorage.setItem("refreshToken", response.data.data.refreshToken);
            localStorage.setItem("role", response.data.data.role);
            localStorage.setItem("id", response.data.data.id);

        } else {
            toast.warning(response.data.message, { autoClose: 2000 });
        }

        return response.data;
    } catch (error) {
        // console.log(error.response.data.message);
        toast.warning(error.response.data.message, { autoClose: 2000 });
    }
});

const SignInSlice = createSlice({
    name: "SignIn",
    initialState: {
        isLoading: false,
        isError: null,
        status: "idle",
        SignIn: [],
    },
    extraReducers: {
        [postSignIn.pending]: (state) => {
            state.isLoading = true;
            state.status = "loading";
        },
        [postSignIn.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.SignIn = action.payload;
            state.status = "success";
            state.statusCode = action.payload.statusCode;
            // console.log(action.payload)
        },
        [postSignIn.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.error;
            state.status = "failed";
        },
    },
});

export default SignInSlice.reducer;
