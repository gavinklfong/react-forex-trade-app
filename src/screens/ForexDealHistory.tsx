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
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootStore";

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
  const { toDate, setToDate, fromDate, setFromDate } = useDeals();

  const deals = useSelector((state: RootState) => state.forex.dealHistory);

  const toDateOnChange = (e: any) => {
    setToDate(new Date(e.value));
  };

  const fromDateOnChange = (e: any) => {
    setFromDate(new Date(e.value));
  };

  return (
    <Box direction="column" margin={{ top: "medium" }}>
      <ThemeContext.Extend value={customTheme}>
        <Box width="xlarge" direction="row" gap="small">
          <FormField label="From Date">
            <DateInput
              value={fromDate.toISOString()}
              buttonProps={{
                label: `${dateFormat.format(new Date(fromDate))}`,
              }}
              onChange={fromDateOnChange}
            />
          </FormField>
          <FormField label="To Date">
            <DateInput
              value={toDate.toISOString()}
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
