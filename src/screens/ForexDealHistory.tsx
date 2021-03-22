import {
  Box,
  Button,
  DateInput,
  FormField,
  grommet,
  ThemeContext,
} from "grommet";
import { deepMerge } from "grommet/utils";

import React, { useState } from "react";
import { addMonths } from "date-fns";
import ForexDealsHistoryTable from "../components/ForexDealsHistoryTable";
import { useDeals } from "../hooks/RatesHook";
import { ForexDeal } from "../models/ForexDeal";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      margin: { left: "0" },
      requiredIndicator: true,
      size: "small",
      weight: 500,
    },
    border: {
      position: "none",
    },
  },
});

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

  // const deals = useDeals(new Date(), new Date());
  const deals = new Array<ForexDeal>();

  return (
    <Box direction="column" margin={{ top: "medium" }}>
      <ThemeContext.Extend value={customTheme}>
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
      </ThemeContext.Extend>
      <Box>
        <ForexDealsHistoryTable records={deals} />
      </Box>
    </Box>
  );
};

export default ForexDealHistory;
