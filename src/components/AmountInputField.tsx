import { Box, Button, TextInput } from "grommet";
import React from "react";

const AmountInputField = (props: any) => (
  <React.Fragment>
    <Box direction="row">
      <TextInput name="AmountInput" />
      <Button>+</Button>
      <Button>-</Button>
    </Box>
  </React.Fragment>
);

export default AmountInputField;
