import React from "react";
import ForexDealsHistoryTable from "../components/ForexDealsHistoryTable";
import { useDeals } from "../hooks/RatesHook";

const ForexDealHistory = (props: any) => {
  const deals = useDeals(new Date(), new Date());

  return <ForexDealsHistoryTable records={deals} />;
};

export default ForexDealHistory;
