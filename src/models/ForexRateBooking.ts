export interface ForexRateBookingReq {
  baseCurrency: string;
  counterCurrency: string;
  tradeAction: string;
  baseCurrencyAmount: number;
  customerId: number;
}

export interface ForexRateBooking extends ForexRateBookingReq {
  bookingRef: string;
  rate: number;
  expiryTime: Date;
}
