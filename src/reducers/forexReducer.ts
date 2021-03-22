import { createReducer, createSlice } from "@reduxjs/toolkit";
import { ForexRate } from "../models/ForexRate";
import { ForexDeal, ForexDealReq } from "../models/ForexDeal";
import {
  fetchBaseCurrenciesSuccess,
  fetchForexRatesSuccess,
} from "../actions/forexRateActions";

interface ForexStore {
  rates: ForexRate[];
  dealHistory: ForexDeal[];
  baseCurrencies: string[];
  dealReq?: ForexDealReq;
  baseCurrency: string;
}

const fetchForexRatesReducer = (
  state: ForexStore,
  action: ReturnType<typeof fetchForexRatesSuccess>
) => {
  return {
    ...state,
    rates: action.payload.rates,
  };
};

const fetchBaseCurrenciesReducer = (
  state: ForexStore,
  action: ReturnType<typeof fetchBaseCurrenciesSuccess>
) => {
  return {
    ...state,
    baseCurrencies: action.payload.baseCurrencies,
  };
};

const initialStore: ForexStore = {
  rates: new Array<ForexRate>(),
  dealHistory: new Array<ForexDeal>(),
  baseCurrencies: new Array<string>(),
  baseCurrency: "GBP",
};
export const forexReducer = createReducer(initialStore, (builder) =>
  builder
    .addCase(fetchForexRatesSuccess, fetchForexRatesReducer)
    .addCase(fetchBaseCurrenciesSuccess, fetchBaseCurrenciesReducer)
);
