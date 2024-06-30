import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/CategorySlice.js';
import productReducer from "../features/category/ProductSlice.js"

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product : productReducer
  },
});

export default store;