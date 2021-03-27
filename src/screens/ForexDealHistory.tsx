import {
  Box,
  Button,
  DateInput,
  FormField,
  grommet,
  ThemeContext,
} from "grommet";

import React, { useState } from "react";
import { addMonths } from "date-fns";
import ForexDealsHistoryTable from "../components/ForexDealsHistoryTable";
import { useDeals } from "../hooks/RatesHook";

const dateFormat = Intl.DateTimeFormat(undefined, { dateStyle: "medium" });

const ForexDealHistory = (props: any) => {
  let now = new Date();
  let previous3Month = addMonths(now, -3);

  const [toDate, setToDate] = useState(now.toISOString());
  const [fromDate, setFromDate] = useState(previous3Month.toISOString());

  const toDateOnChange = (e: any) => {
    setToDate(e.value);
  };

  const fromDateOnChange = (e: any) => {
    setFromDate(e.value);
  };

  const deals = useDeals(new Date(), new Date());

  return (
    <Box direction="column" margin={{ top: "medium" }}>
      <Box width="xlarge" direction="row" gap="small">
        <FormField label="From Date">
          <DateInput
            value={fromDate}
            buttonProps={{
              label: `${dateFormat.format(new Date(fromDate))}`,
            }}
            onChange={fromDateOnChange}
          />
        </FormField>
        <FormField label="To Date">
          <DateInput
            value={toDate}
            buttonProps={{
              label: `${dateFormat.format(new Date(toDate))}`,
            }}
            onChange={toDateOnChange}
          />
        </FormField>
      </Box>
      <Box>
        <ForexDealsHistoryTable records={deals} />
      </Box>
    </Box>
  );
};

export default ForexDealHistory;
