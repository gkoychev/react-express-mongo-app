import { createReducer, AnyAction } from "@reduxjs/toolkit";

const initialState = {
  ready: false,
  loading: false,
  error: null
};
export type UserState = typeof initialState;

export default createReducer(initialState, {
  "user/fetch/started": () => {
    return { ...initialState, loading: true };
  },

  "user/fetch/failed": (state: UserState, action: AnyAction) => {
    return {
      ...state,
      loading: false,
      error: action?.error?.message || "something went wrong"
    };
  },

  "user/fetch/succeeded": (state: UserState, { payload }: AnyAction) => {
    return { ...state, ...payload, ready: true, loading: false };
  }
});
