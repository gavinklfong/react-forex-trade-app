import { createAction } from "@reduxjs/toolkit";
import { Action, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FOREX_RATE_ACTION_TYPE } from "./actionTypes";
import { RootState } from "../reducers/rootStore";
import { ForexService } from "../services/ForexService";
import { ForexRateBookingReq } from "../models/ForexRateBooking";
import { ForexRateBooking } from "../models/ForexRateBooking";
import { ForexRate } from "../models/ForexRate";

export const bookForexRatePending = createAction(
  FOREX_RATE_ACTION_TYPE.BOOK_FOREX_RATE_PENDING
);
export const bookForexRateSuccess = createAction(
  FOREX_RATE_ACTION_TYPE.BOOK_FOREX_RATE_SUCCESS,
  (booking: ForexRateBooking) => ({
    payload: {
      booking: booking,
    },
  })
);

export const fetchForexRatesPending = createAction(
  FOREX_RATE_ACTION_TYPE.FETCH_FOREX_RATES_PENDING
);
export const fetchForexRatesSuccess = createAction(
  FOREX_RATE_ACTION_TYPE.FETCH_FOREX_RATES_SUCCESS,
  (rates: ForexRate[]) => ({
    payload: {
      rates: rates,
    },
  })
);

export const fetchBaseCurrenciesPending = createAction(
  FOREX_RATE_ACTION_TYPE.FETCH_FOREX_BASE_CURRENCIES_PENDING
);
export const fetchBaseCurrenciesSuccess = createAction(
  FOREX_RATE_ACTION_TYPE.FETCH_FOREX_BASE_CURRENCIES_SUCCESS,
  (baseCurrencies: string[]) => ({
    payload: {
      baseCurrencies: baseCurrencies,
    },
  })
);

export const selectBaseCurrency = createAction(
  FOREX_RATE_ACTION_TYPE.SELECT_BASE_CURRENCY,
  (baseCurrency: string) => ({
    payload: {
      baseCurrency: baseCurrency,
    },
  })
);

const forexService = new ForexService();

export const bookForexRate = (req: ForexRateBookingReq) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(bookForexRatePending());
    let booking = await forexService.bookRate(req);
    dispatch(bookForexRateSuccess(booking));
  };
};

export const fetchForexRates = (baseCurrency: string) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(fetchForexRatesPending());

    const forexRates = await forexService.fetchRates(baseCurrency);
    dispatch(fetchForexRatesSuccess(forexRates));
  };
};

export const fetchBaseCurrencies = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(fetchBaseCurrenciesPending());
    const baseCurrencies = await forexService.fetchBaseCurrency();
    dispatch(fetchBaseCurrenciesSuccess(baseCurrencies));
  };
};
