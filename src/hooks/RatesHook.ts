import { ForexService } from "../services/ForexService";

const forexService = new ForexService();

export const useRates = (baseCurrency: string) => {
  if (baseCurrency == null || baseCurrency === "") {
    baseCurrency = "GBP";
  }

  return forexService.fetchRates(baseCurrency);
};
