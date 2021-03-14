export interface ForexRate {
  timestamp: Date;
  baseCurrency: string;
  counterCurrency: string;
  buyRate: number;
  sellRate: number;
  spread: number;
}
