import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import myFilterSlice from './myFilterSlice';
import { productApi } from './myProductSlice';

const middleware = [...getDefaultMiddleware({}), productApi.middleware];

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: myFilterSlice,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
