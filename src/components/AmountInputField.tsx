import { Box, Button, TextInput, Grid, Text } from "grommet";
import { Add, Subtract } from "grommet-icons";
import React from "react";

interface Props {
  value: number | undefined;
  onChange: (text: number) => void;
}

const AmountInputField = (props: Props) => {
  const addOnClick = () => {
    props.onChange(props.value || 0 + 100);
  };

  const minusOnClick = () => {
    let newValue = props.value || 0 - 100;
    newValue = newValue < 0 ? 0 : newValue;

    props.onChange(newValue);
  };

  return (
    <Box direction="row" gap="xsmall">
      <Box>
        <TextInput
          name="AmountInput"
          value={props.value}
          onChange={(e: any) => props.onChange(+e.target.value)}
        />
      </Box>
      <Button primary icon={<Add />} onClick={addOnClick}></Button>
      <Button primary icon={<Subtract onClick={minusOnClick} />}></Button>
    </Box>
  );
};

export default AmountInputField;
