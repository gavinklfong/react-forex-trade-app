
export interface ForexRate {
    timestamp: date;
    baseCurrency: string;
    counterCurrency: string;
    buyRate: double;
    sellRate: double;
    spread: double;
}