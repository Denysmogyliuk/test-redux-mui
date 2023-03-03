import { configureStore } from "@reduxjs/toolkit";
import { default as newsReducer } from "./features/news/slice";
import { default as authReducer } from "./features/auth/slice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;