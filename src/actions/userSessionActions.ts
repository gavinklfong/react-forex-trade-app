import { createAction } from "@reduxjs/toolkit";
import { LOGIN_SESSION_ACTION_TYPE } from "./actionTypes";

// TODO: authentication to be implemented
export const login = createAction(
  LOGIN_SESSION_ACTION_TYPE.LOGIN_SUCCESS,
  () => ({ payload: "" })
);

// TODO: authentication to be implemented
export const logout = createAction(
  LOGIN_SESSION_ACTION_TYPE.LOGOUT_SUCCESS,
  () => ({ payload: "" })
);
