import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import BoxComponent from "./BoxComponent";

const customTheme = deepMerge(grommet, {
  formField: {
    border: {
      color: "border",
      side: "all",
    },
  },
});

export const Default = () => (
  <Grommet theme={customTheme}>
    <Box align="center" pad="large">
      <BoxComponent />
    </Box>
  </Grommet>
);

// This default export determines where your story goes in the story list
export default {
  title: "BoxComponent",
  component: BoxComponent,
};
