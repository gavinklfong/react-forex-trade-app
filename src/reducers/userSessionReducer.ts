import { createReducer, createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../actions/userSessionActions";

interface UserSessionStore {
  customerId: number;
}

const initialStore: UserSessionStore = {
  customerId: 1,
};

export const userSessionReducer = createReducer(initialStore, (builder) =>
  builder
    .addCase(login, (state, action) => ({
      ...state,
    }))
    .addCase(logout, (state, action) => ({
      ...state,
    }))
);
