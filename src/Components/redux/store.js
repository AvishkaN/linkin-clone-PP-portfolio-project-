import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import postReducer from './postSlice';
import clickReducer from './clickSlice';
import commentSlice from './commentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    clicks: clickReducer,
    comments: commentSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});