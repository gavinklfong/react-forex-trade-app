import { ForexDeal } from "../models/ForexDeal";
import { ForexRate } from "../models/ForexRate";

const FOREX_RATES: ForexRate[] = [
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CAD",
    buyRate: 1.7446,
    sellRate: 1.744,
    spread: 0.0006,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "HKD",
    buyRate: 10.793,
    sellRate: 10.7928,
    spread: 0.0002,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "ISK",
    buyRate: 179.2974,
    sellRate: 179.297,
    spread: 0.0004,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "PHP",
    buyRate: 67.3058,
    sellRate: 67.305,
    spread: 0.0008,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "DKK",
    buyRate: 8.6638,
    sellRate: 8.663,
    spread: 0.0008,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "HUF",
    buyRate: 426.6091,
    sellRate: 426.609,
    spread: 0.0001,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CZK",
    buyRate: 30.4654,
    sellRate: 30.465,
    spread: 0.0004,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "RON",
    buyRate: 5.6911,
    sellRate: 5.691,
    spread: 0.0001,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "JPY",
    buyRate: 151.6164,
    sellRate: 151.616,
    spread: 0.0004,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "EUR",
    buyRate: 1.165,
    sellRate: 1.1648,
    spread: 0.0002,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CNY",
    buyRate: 9.0447,
    sellRate: 9.044,
    spread: 0.0007,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "NZD",
    buyRate: 1.9377,
    sellRate: 1.937,
    spread: 0.0007,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "USD",
    buyRate: 1.3902,
    sellRate: 1.39,
    spread: 0.0002,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "SGD",
    buyRate: 1.8702,
    sellRate: 1.87,
    spread: 0.0002,
  },
];

const FOREX_DEALS: ForexDeal[] = [
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "USD",
    rate: 1.7,
    dealType: "buy",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 170,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CAD",
    rate: 1.02,
    dealType: "buy",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 102,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "HKD",
    rate: 10.7,
    dealType: "sell",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 1070,
  },
];

export class ForexService {
  fetchRates(baseCurrency: string): ForexRate[] {
    return FOREX_RATES;
  }

  fetchDeals(startDate: Date, endDate: Date = new Date()): ForexDeal[] {
    return FOREX_DEALS;
  }
}
