export interface ForexDeal {
  timestamp: Date;
  baseCurrency: string;
  counterCurrency: string;
  dealType: "buy" | "sell";
  rate: number;
  baseCurrencyAmount: number;
  counterCurrencyAmount: number;
}
