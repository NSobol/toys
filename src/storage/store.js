import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    product: productSlice,
  },
});

export default store;
