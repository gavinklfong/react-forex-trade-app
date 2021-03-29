import { Box, Button, TextInput, Grid, Text } from "grommet";
import { Add, Subtract } from "grommet-icons";
import React, { useState } from "react";

interface Props {
  value: number | undefined;
  onChange: (text: number) => void;
}

const AmountInputField = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const onChange = (value: number) => {
    setValue(value);
    props.onChange(value);
  };

  const addOnClick = () => {
    let newValue = value || 0;
    newValue += 100;
    onChange(newValue);
  };

  const minusOnClick = () => {
    let newValue = value || 0;
    newValue -= 100;
    newValue = newValue < 0 ? 0 : newValue;
    onChange(newValue);
  };

  return (
    <Box direction="row" gap="xsmall">
      <Box>
        <TextInput
          name="AmountInput"
          value={value}
          onChange={(e: any) => onChange(+e.target.value)}
        />
      </Box>
      <Button primary icon={<Add />} onClick={addOnClick}></Button>
      <Button primary icon={<Subtract onClick={minusOnClick} />}></Button>
    </Box>
  );
};

export default AmountInputField;
