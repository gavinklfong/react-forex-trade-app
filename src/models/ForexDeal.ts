export interface ForexDealReq {
  baseCurrency: string;
  counterCurrency: string;
  tradeAction: string;
  rate?: number;
  baseCurrencyAmount?: number;
  counterCurrencyAmount?: number;
  rateBookingRef?: string;
  customerId: number;
}
export interface ForexDeal {
  timestamp: Date;
  dealRef: string;
  baseCurrency: string;
  counterCurrency: string;
  dealType: string;
  rate: number;
  baseCurrencyAmount: number;
  counterCurrencyAmount: number;
}
