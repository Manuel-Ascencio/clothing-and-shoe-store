import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API = "https://backend-clothing-and-shoe-store.onrender.com/";

export const checkout = (selectedProducts, userId, email) => {
  axios
    .post(`${API}/api/stripe/create-checkout-session`, {
      selectedProducts,
      userId,
      email,
    })
    .then((res) => {
      if (res.data.url) {
        window.location.href = res.data.url;
      }
    })
    .catch((err) => console.log(err.message));
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${API}/api/users`, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${API}/api/users/login`, {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchOrders = async (email) => {
  try {
    const response = await axios.get(
      `${API}/api/orders?email=pzwemrk@gmail.com`
    );
    const orders = response.data;
    return orders;
  } catch (error) {
    console.error(error);
  }
};
