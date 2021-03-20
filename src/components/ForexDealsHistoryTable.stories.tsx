import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import ForexDealsHistoryTable from "./ForexDealsHistoryTable";
import { ForexDeal } from "../models/ForexDeal";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const DATA: ForexDeal[] = [
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "USD",
    rate: 1.7,
    dealType: "buy",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 170,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CAD",
    rate: 1.02,
    dealType: "buy",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 102,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "HKD",
    rate: 10.7,
    dealType: "buy",
    baseCurrencyAmount: 100,
    counterCurrencyAmount: 1070,
  },
];

export const Default = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <ForexDealsHistoryTable records={DATA} />
    </Box>
  </Grommet>
);

// This default export determines where your story goes in the story list
export default {
  title: "ForexDealsHistoryTable",
  component: ForexDealsHistoryTable,
};
