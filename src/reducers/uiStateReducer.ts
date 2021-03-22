import { createReducer, createSlice } from "@reduxjs/toolkit";
import {
  fetchForexDealsPending,
  fetchForexDealsSuccess,
} from "../actions/forexDealActions";
import {
  fetchForexRatesPending,
  fetchForexRatesSuccess,
} from "../actions/forexRateActions";

interface UIStateStore {
  isLoading: boolean;
}

const initialStore: UIStateStore = {
  isLoading: false,
};

export const uiStateReducer = createReducer(initialStore, (builder) =>
  builder
    .addCase(fetchForexRatesPending, (state, action) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(fetchForexRatesSuccess, (state, action) => ({
      ...state,
      isLoading: false,
    }))
    .addCase(fetchForexDealsPending, (state, action) => ({
      ...state,
      isLoading: true,
    }))
    .addCase(fetchForexDealsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
    }))
);
