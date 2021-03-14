import React from "react";
import ForexRatesTable from "../components/ForexRatesTable";

import { useRates } from "../hooks/RatesHook";

const ForexRates = (props: any) => {
  const forexRates = useRates("GBP");

  return <ForexRatesTable rates={forexRates} />;
};

export default ForexRates;
