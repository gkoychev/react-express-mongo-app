import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import posts from "./reducers/posts";

const middleware = [...getDefaultMiddleware(), logger];
const reducer = {
  posts
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
