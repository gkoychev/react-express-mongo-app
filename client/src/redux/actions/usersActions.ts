import { createAction } from "@reduxjs/toolkit";
import { getUserUrl } from "../../utils/apiUtils";
import { UserDataType } from "../../interfaces";

export const fetchUserStarted = createAction("user/fetch/started");
export const fetchUserSucceeded = createAction<any>("user/fetch/succeeded");
export const fetchUserFailed = createAction<Error>("user/fetch/failed");

export const fetchUser = (id: number) => (dispatch: any) => {
  dispatch(fetchUserStarted());

  return fetch(getUserUrl(id))
    .then(res => res.json())
    .then(
      (data: UserDataType) => dispatch(fetchUserSucceeded(data)),
      (error: Error) => dispatch(fetchUserFailed(error))
    );
};
