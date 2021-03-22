import { createReducer, createSlice } from "@reduxjs/toolkit";
import { ForexRate } from "../models/ForexRate";
import { ForexDeal, ForexDealReq } from "../models/ForexDeal";
import { fetchForexRatesSuccess } from "../actions/forexRateActions";

interface ForexStore {
  rates: ForexRate[];
  dealHistory: ForexDeal[];
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

const initialStore: ForexStore = {
  rates: new Array<ForexRate>(),
  dealHistory: new Array<ForexDeal>(),
  baseCurrency: "GBP",
};
export const forexReducer = createReducer(initialStore, (builder) =>
  builder.addCase(fetchForexRatesSuccess, fetchForexRatesReducer)
);
