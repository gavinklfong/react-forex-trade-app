import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import ForexRatesTable from "./ForexRatesTable";
import { ForexRate } from "../models/ForexRate";
import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const DATA: ForexRate[] = [
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "USD",
    buyRate: 1.7,
    sellRate: 1.6,
    spread: 0.1,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "CAD",
    buyRate: 1.02,
    sellRate: 1.03,
    spread: 0.01,
  },
  {
    timestamp: new Date(),
    baseCurrency: "GBP",
    counterCurrency: "HKD",
    buyRate: 10.7,
    sellRate: 10.6,
    spread: 0.1,
  },
];

export const Default = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <ForexRatesTable rates={DATA} />
    </Box>
  </Grommet>
);

// This default export determines where your story goes in the story list
export default {
  title: "RatesTable",
  component: ForexRatesTable,
};
