import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userReducers";
import { chatReducer } from "../reducers/chatReducer";

const reducer = {
  user: userReducer,
  chat: chatReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
