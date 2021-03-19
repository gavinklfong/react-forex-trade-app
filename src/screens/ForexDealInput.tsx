import React from "react";
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

const ForexDealInput = (props: any) => {
  const history = useHistory();

  const cancel = () => {
    history.push("/rates");
  };

  const submit = () => {
    history.push("/deal/review");
  };

  return (
    <Box fill pad="medium" align="center">
      <Box align="start" gap="medium">
        <Heading size="small" level="1" alignSelf="center">
          Create Deal
        </Heading>
        <ThemeContext.Extend value={customTheme}>
          <Form onSubmit={submit}>
            <FormField
              name="baseCurrencyAmount"
              label="Amount (GBP)"
              pad
              required
            >
              <AmountInputField />
            </FormField>
            <FormField name="rate" label="Exchange Rate (Indicative)" pad>
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
              <Button type="submit" label="Next" primary onClick={submit} />
              <Button label="Cancel" onClick={cancel} />
            </Box>
          </Form>
        </ThemeContext.Extend>
      </Box>
    </Box>
  );
};

export default ForexDealInput;
