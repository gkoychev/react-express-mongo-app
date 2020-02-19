import { combineReducers } from "redux";
import posts from "./posts";
import user from "./user";

const rootReducer = combineReducers({
  posts,
  user
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
