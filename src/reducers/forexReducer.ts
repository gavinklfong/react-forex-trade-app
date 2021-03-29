import { createReducer, createSlice } from "@reduxjs/toolkit";
import { ForexRate } from "../models/ForexRate";
import { ForexDeal, ForexDealReq } from "../models/ForexDeal";
import {
  bookForexRate,
  bookForexRateSuccess,
  fetchBaseCurrenciesSuccess,
  fetchForexRatesSuccess,
  selectBaseCurrency,
} from "../actions/forexRateActions";
import {
  createForexDealSuccess,
  fetchForexDealsSuccess,
  updateForexDealAmount,
} from "../actions/forexDealActions";
import { ForexRateBooking } from "../models/ForexRateBooking";

interface ForexStore {
  rates: ForexRate[];
  dealHistory: ForexDeal[];
  baseCurrencies: string[];
  dealReq?: ForexDealReq;
  rateBooking?: ForexRateBooking;
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

const fetchForexDealsReducer = (
  state: ForexStore,
  action: ReturnType<typeof fetchForexDealsSuccess>
) => {
  return {
    ...state,
    dealHistory: action.payload.deals,
  };
};

const selectBaseCurrencyReducer = (
  state: ForexStore,
  action: ReturnType<typeof selectBaseCurrency>
) => {
  return {
    ...state,
    baseCurrency: action.payload.baseCurrency,
  };
};

const createForexDealReducer = (
  state: ForexStore,
  action: ReturnType<typeof createForexDealSuccess>
) => {
  return {
    ...state,
    dealReq: action.payload.dealReq,
  };
};

const updateForexDealAmountReducer = (
  state: ForexStore,
  action: ReturnType<typeof updateForexDealAmount>
) => {
  const dealReq = {
    ...state.dealReq,
    dealType: state.dealReq?.dealType || "",
    baseCurrency: state.dealReq?.baseCurrency || "",
    counterCurrency: state.dealReq?.counterCurrency || "",
    baseCurrencyAmount: action.payload.baseCurrencyAmount,
    counterCurrencyAmount: action.payload.counterCurrencyAmount,
  };

  return {
    ...state,
    dealReq: dealReq,
  };
};

const bookForexRateReducer = (
  state: ForexStore,
  action: ReturnType<typeof bookForexRateSuccess>
) => {
  const dealReq = {
    ...state.dealReq,
    dealType: state.dealReq?.dealType || "",
    baseCurrency: state.dealReq?.baseCurrency || "",
    counterCurrency: state.dealReq?.counterCurrency || "",
    baseCurrencyAmount: state.dealReq?.baseCurrencyAmount,
    counterCurrencyAmount: state.dealReq?.counterCurrencyAmount,
    bookingRef: action.payload.booking.bookingRef,
    rate: action.payload.booking.rate,
  };

  return {
    ...state,
    dealReq: dealReq,
    rateBooking: action.payload.booking,
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
    .addCase(fetchForexDealsSuccess, fetchForexDealsReducer)
    .addCase(selectBaseCurrency, selectBaseCurrencyReducer)
    .addCase(createForexDealSuccess, createForexDealReducer)
    .addCase(updateForexDealAmount, updateForexDealAmountReducer)
    .addCase(bookForexRateSuccess, bookForexRateReducer)
);
