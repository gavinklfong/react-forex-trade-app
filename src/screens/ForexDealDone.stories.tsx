import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import ForexDealDone from "./ForexDealDone";

export const Default = () => (
  <Grommet theme={grommet}>
    <Box align="center" pad="large">
      <ForexDealDone />
    </Box>
  </Grommet>
);

// This default export determines where your story goes in the story list
export default {
  title: "ForexDealDone",
  component: ForexDealDone,
};
