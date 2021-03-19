import React from "react";
import { Heading, Box, Grid, FormField, TextInput, Button } from "grommet";

import { RouterAnchor } from "../components/RouteAnchor";
import AmountInputField from "../components/AmountInputField";

const ForexDealInput = (props: any) => {
  return (
    <Box fill>
      <Heading size="medium" level="2">
        Create Deal
      </Heading>
      <FormField name="baseCurrencyAmount" label="Amount (GBP)">
        <AmountInputField />
      </FormField>
      <RouterAnchor label="Next" path="/deal/review" />
    </Box>
  );
};

export default ForexDealInput;
