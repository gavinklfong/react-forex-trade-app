import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { forexReducer } from "./forexReducer";
import { uiStateReducer } from "./uiStateReducer";

export const rootStore = configureStore({
  reducer: {
    forex: forexReducer,
    uiState: uiStateReducer,
  },
  middleware: [thunk, logger],
});

export type RootState = ReturnType<typeof rootStore.getState>;
