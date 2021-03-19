import React, { useState } from "react";
import {
  Heading,
  Box,
  Grid,
  FormField,
  TextInput,
  Button,
  Text,
  Form,
  grommet,
  ThemeContext,
  Clock,
} from "grommet";

import AmountInputField from "../components/AmountInputField";
import { useHistory } from "react-router";
import { deepMerge } from "grommet/utils";

const customTheme = deepMerge(grommet, {
  formField: {
    label: {
      margin: { left: "0" },
      requiredIndicator: true,
      size: "medium",
      weight: 500,
    },
    border: {
      position: "none",
    },
  },
});

const ForexDealDone = (props: any) => {
  const history = useHistory();

  const submit = () => {
    history.push("/deal/history");
  };

  return (
    <Box fill pad="medium" align="center">
      <Box justify="start" align="start" gap="medium">
        <Heading size="small" level="1" color="status-ok">
          Deal Completed
        </Heading>
        <ThemeContext.Extend value={customTheme}>
          <Form onSubmit={submit}>
            <FormField name="baseCurrencyAmount" label="Amount (GBP)" pad>
              <Text size="xl">100</Text>
            </FormField>
            <FormField name="rate" label="Exchange Rate" pad>
              <Text size="xl">1.7940</Text>
            </FormField>
            <FormField name="counterCurrencyAmount" label="Amount (USD)" pad>
              <Text size="xl">179.40</Text>
            </FormField>
            <Box
              direction="row"
              justify="start"
              gap="medium"
              margin={{ top: "medium" }}
            >
              <Button type="submit" label="Done" primary onClick={submit} />
            </Box>
          </Form>
        </ThemeContext.Extend>
      </Box>
    </Box>
  );
};

export default ForexDealDone;
