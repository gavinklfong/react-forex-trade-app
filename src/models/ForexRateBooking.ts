export interface ForexRateBookingReq {
  baseCurrency: string;
  counterCurrency: string;
  dealType: string;
  baseCurrencyAmount: number;
}

export interface ForexRateBooking extends ForexRateBookingReq {
  bookingRef: string;
  rate: number;
  expiryTime: Date;
}
