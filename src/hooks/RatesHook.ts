import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBaseCurrencies,
  fetchForexRates,
} from "../actions/forexRateActions";
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
    dispatch(fetchForexRates(baseCurrency));
  }, []);
};

export const useDeals = async (startDate: Date, endDate: Date) => {
  return await forexService.fetchDeals(startDate, endDate);
};
