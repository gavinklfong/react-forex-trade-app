import { Box, Button, TextInput, Grid, Text } from "grommet";
import { Add, Subtract } from "grommet-icons";
import React from "react";

const AmountInputField = (props: any) => (
  <Box direction="row" gap="xsmall">
    <Box>
      <TextInput name="AmountInput" />
    </Box>
    <Button primary icon={<Add />}></Button>
    <Button primary icon={<Subtract />}></Button>
  </Box>
);

export default AmountInputField;
