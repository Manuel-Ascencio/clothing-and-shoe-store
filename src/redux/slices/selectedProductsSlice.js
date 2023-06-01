import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  womenProductType: "all",
  menProductType: "all",
  selectedProducts: [],
  totalSelectedProducts: 0,
  totalToPay: 0,
};

export const selectedProductsSlice = createSlice({
  name: "selectedProducts",
  initialState,
  reducers: {
    selectWomenProductType: (state, action) => {
      state.womenProductType = action.payload;
    },
    selectMenProductType: (state, action) => {
      state.menProductType = action.payload;
    },
    addProduct: (state, action) => {
      const { product, quantity } = action.payload;
      const index = state.selectedProducts.findIndex(
        (selectedProduct) =>
          selectedProduct.id === product.id &&
          selectedProduct.shop === product.shop
      );

      if (index !== -1) {
        state.selectedProducts[index].quantity += quantity;
      } else {
        state.selectedProducts.push({ ...product, quantity });
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProducts = state.selectedProducts.filter(
        (selectedProduct, id) => id !== productId
      );
    },
    clearSelectedProducts: (state) => {
      state.selectedProducts = [];
    },
    updateTotalSelectedProducts: (state, action) => {
      state.totalSelectedProducts = action.payload;
    },
    updateTotalToPay: (state, action) => {
      state.totalToPay = action.payload;
    },
  },
});

export const {
  selectWomenProductType,
  selectMenProductType,
  addProduct,
  removeProduct,
  clearSelectedProducts,
  updateTotalSelectedProducts,
  updateTotalToPay,
} = selectedProductsSlice.actions;

export default selectedProductsSlice.reducer;
