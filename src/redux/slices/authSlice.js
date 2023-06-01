import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { registerUser, loginUser } from "../../api/api";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  id: "",
  activeForm: "login",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectForm: (state, action) => {
      state.activeForm = action.payload;
    },
    logoutUser: (state, action) => {
      localStorage.removeItem("token");

      return {
        ...state,
        token: "",
        name: "",
        email: "",
        id: "",
        activeForm: "login",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          id: user.id,
          registerStatus: "success",
        };
      }
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          id: user.id,
          loginStatus: "success",
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { setSelectForm, logoutUser } = authSlice.actions;

export default authSlice.reducer;
