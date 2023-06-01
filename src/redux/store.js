import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import selectedProductsSlice from "./slices/selectedProductsSlice";
import productsSlice from "./slices/productsSlice";
import authSlice from "./slices/authSlice";
import ordersSlice from "./slices/ordersSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["products"],
};

const rootReducer = combineReducers({
  products: productsSlice,
  selectedProducts: selectedProductsSlice,
  auth: authSlice,
  orders: ordersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
