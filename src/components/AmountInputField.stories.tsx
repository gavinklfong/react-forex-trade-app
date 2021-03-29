import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { Box, Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import AmountInputField from "./AmountInputField";

const customTheme = deepMerge(grommet, {
  formField: {
    border: {
      color: "border",
      side: "all",
    },
  },
});

const onChange = (input: number) => {
  console.log(input);
};

export const Default = () => (
  <Grommet theme={customTheme}>
    <Box align="center" pad="large">
      <AmountInputField name={"AmountInput"} value={0} onChange={onChange} />
    </Box>
  </Grommet>
);

// This default export determines where your story goes in the story list
export default {
  title: "AmountInputField",
  component: AmountInputField,
};
