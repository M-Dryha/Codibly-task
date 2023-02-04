import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import myFilterSlice from './myFilterSlice';
import { productApi } from './myProductSlice';

// const persistConfig = {
//   key: 'products',
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  productApi.middleware,
];

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: myFilterSlice,
    // auth: persistReducer(authPersistConfig, authSlice),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
