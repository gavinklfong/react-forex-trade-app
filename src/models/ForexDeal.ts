export interface ForexDealReq {
  baseCurrency: string;
  counterCurrency: string;
  dealType: "buy" | "sell";
  rate: number;
  baseCurrencyAmount: number;
}
export interface ForexDeal extends ForexDealReq {
  timestamp: Date;
  counterCurrencyAmount: number;
  dealRef: string;
}
