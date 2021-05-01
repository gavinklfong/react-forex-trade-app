import { createAction } from "@reduxjs/toolkit";
import { Action, ActionCreator } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FOREX_DEAL_ACTION_TYPE } from "./actionTypes";
import { ForexDeal, ForexDealReq } from "../models/ForexDeal";
import { RootState } from "../reducers/rootStore";
import { ForexService } from "../services/ForexService";
import { fetchForexRatesPending } from "./forexRateActions";

export const submitForexDealPending = createAction(
  FOREX_DEAL_ACTION_TYPE.SUBMIT_FOREX_DEAL_PENDING
);

export const submitForexDealSuccess = createAction(
  FOREX_DEAL_ACTION_TYPE.SUBMIT_FOREX_DEAL_SUCCESS,
  (deal: ForexDeal) => ({
    payload: {
      deal: deal,
    },
  })
);

export const fetchForexDealsPending = createAction(
  FOREX_DEAL_ACTION_TYPE.FETCH_FOREX_DEALS_PENDING
);
export const fetchForexDealsSuccess = createAction(
  FOREX_DEAL_ACTION_TYPE.FETCH_FOREX_DEALS_SUCCESS,
  (deals: ForexDeal[]) => ({
    payload: {
      deals: deals,
    },
  })
);

export const createForexDealPending = createAction(
  FOREX_DEAL_ACTION_TYPE.CREATE_FOREX_DEAL_PENDING
);
export const createForexDealSuccess = createAction(
  FOREX_DEAL_ACTION_TYPE.CREATE_FOREX_DEAL_SUCCESS,
  (req: ForexDealReq) => ({
    payload: {
      dealReq: req,
    },
  })
);

export const updateForexDealAmount = createAction(
  FOREX_DEAL_ACTION_TYPE.UPDATE_FOREX_DEAL_AMOUNT,
  (baseCurrencyAmount: number, counterCurrencyAmount: number) => ({
    payload: {
      baseCurrencyAmount: baseCurrencyAmount,
      counterCurrencyAmount: counterCurrencyAmount,
    },
  })
);

const forexService = new ForexService();

export const createForexDeal = (
  baseCurrency: string,
  counterCurrency: string,
  dealType: string,
  customerId: number
) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(createForexDealPending());
    let forexRate = await forexService.fetchRate(baseCurrency, counterCurrency);
    let rate = dealType === "BUY" ? forexRate.buyRate : forexRate.sellRate;
    let deal = {
      baseCurrency: baseCurrency,
      counterCurrency: counterCurrency,
      tradeAction: dealType,
      rate: rate,
      baseCurrencyAmount: 0,
      counterCurrencyAmount: 0,
      customerId: customerId,
    };
    dispatch(createForexDealSuccess(deal));
  };
};

export const submitForexDeal = (req: ForexDealReq) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(submitForexDealPending());
    let deal = await forexService.submitDeal(req);
    dispatch(submitForexDealSuccess(deal));
  };
};

export const fetchForexDeals = (fromDate: Date, toDate: Date) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(fetchForexDealsPending());
    const deals = await forexService.fetchDeals(fromDate, toDate);
    dispatch(fetchForexDealsSuccess(deals));
  };
};
