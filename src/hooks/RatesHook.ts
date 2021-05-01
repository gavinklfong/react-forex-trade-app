import { addMonths } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createForexDeal, fetchForexDeals } from "../actions/forexDealActions";
import {
  fetchBaseCurrencies,
  fetchForexRates,
} from "../actions/forexRateActions";
import { ForexDealReq } from "../models/ForexDeal";
import { RootState } from "../reducers/rootStore";
import { ForexService } from "../services/ForexService";

const forexService = new ForexService();

export const useRates = () => {
  const dispatch = useDispatch();

  const baseCurrency = useSelector(
    (state: RootState) => state.forex.baseCurrency
  );

  useEffect(() => {
    dispatch(fetchBaseCurrencies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchForexRates(baseCurrency));
  }, [dispatch, baseCurrency]);
};

export const useDeals = () => {
  const dispatch = useDispatch();

  let now = new Date();
  let previous3Month = addMonths(now, -3);

  const [toDate, setToDate] = useState<Date>(now);
  const [fromDate, setFromDate] = useState<Date>(previous3Month);

  useEffect(() => {
    dispatch(fetchForexDeals(fromDate, toDate));
  }, [dispatch, fromDate, toDate]);

  return { toDate, setToDate, fromDate, setFromDate };
};

export const useDealInput = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const customerId = useSelector(
    (state: RootState) => state.userSession.customerId
  );
  // const [dealReq, setDealReq] = useState<ForexDealReq>({
  //   baseCurrency: params.baseCurrency,
  //   counterCurrency: params.counterCurrency,
  //   dealType: params.dealType,
  // });

  // const setRate = (rate: number) => {
  //   setDealReq({ ...dealReq, rate: rate });
  // };

  // const setBaseCurrencyAmount = (amount: number) => {
  //   let counterCurrencyAmount = 0;
  //   if (dealReq.rate) {
  //     counterCurrencyAmount = dealReq.rate * amount;
  //   }
  //   setDealReq({
  //     ...dealReq,
  //     baseCurrencyAmount: amount,
  //     counterCurrencyAmount: counterCurrencyAmount,
  //   });
  // };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // TODO: define a type for deal type instead of getting buy / sell everywhere
    let dealType: string = "BUY";
    if (params.get("dealType") != null && params.get("dealType") === "SELL")
      dealType = "SELL";

    dispatch(
      createForexDeal(
        params.get("baseCurrency")!,
        params.get("counterCurrency")!,
        dealType,
        customerId
      )
    );
  }, [dispatch, location]);
};
