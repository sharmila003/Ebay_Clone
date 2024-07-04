import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/CategorySlice.js';
import productReducer from "../features/category/ProductSlice.js"
import cartReducer from '../components/cartslice';
//import thunk from 'redux-thunk';


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product : productReducer,
    cart: cartReducer,
  },

})

export default store;
