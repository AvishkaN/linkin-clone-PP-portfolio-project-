import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postSlice';
import clickReducer from './clickSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    clicks: clickReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});