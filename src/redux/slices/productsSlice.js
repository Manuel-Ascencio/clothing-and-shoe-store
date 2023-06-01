import { createSlice } from "@reduxjs/toolkit";
import { WOMEN_PRODUCTS, MEN_PRODUCTS } from "../../products";

const initialState = {
  productsWomen: WOMEN_PRODUCTS,
  productsMen: MEN_PRODUCTS,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
});

export default productsSlice.reducer;
