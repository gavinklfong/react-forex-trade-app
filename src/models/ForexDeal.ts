export interface ForexDeal {
  timestamp: Date;
  baseCurrency: string;
  counterCurrency: string;
  dealType: string;
  rate: number;
  amount: number;
}
