import { Box, Button, TextInput, Grid, Text } from "grommet";
import { Add, Subtract } from "grommet-icons";
import React from "react";

interface Props {
  value: number | undefined;
  onChange: (text: number) => void;
}

const AmountInputField = (props: Props) => (
  <Box direction="row" gap="xsmall">
    <Box>
      <TextInput
        name="AmountInput"
        value={props.value}
        onChange={(e: any) => props.onChange(+e.target.value)}
      />
    </Box>
    <Button primary icon={<Add />}></Button>
    <Button primary icon={<Subtract />}></Button>
  </Box>
);

export default AmountInputField;
