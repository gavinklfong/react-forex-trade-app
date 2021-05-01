import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { forexReducer } from "./forexReducer";
import { uiStateReducer } from "./uiStateReducer";
import { userSessionReducer } from "./userSessionReducer";

export const rootStore = configureStore({
  reducer: {
    forex: forexReducer,
    uiState: uiStateReducer,
    userSession: userSessionReducer,
  },
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof rootStore.getState>;
