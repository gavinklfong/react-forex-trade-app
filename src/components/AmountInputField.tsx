import { Box, Button, TextInput, Grid, Text } from "grommet";
import { Add, Subtract } from "grommet-icons";
import React, { useEffect, useState } from "react";

interface Props {
  name: string;
  value: number | undefined;
  onChange: (text: number) => void;
}

const AmountInputField = (props: Props) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

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

  const inputFieldOnChange = (value: string) => {
    const exp = /\D/g;
    let formattedValue = value.replace(exp, "");
    if (formattedValue.length > 0) onChange(+formattedValue);
    else onChange(0);
  };

  return (
    <Box direction="row" gap="xsmall">
      <Box>
        <TextInput
          name={props.name}
          value={value}
          onChange={(e: any) => inputFieldOnChange(e.target.value)}
        />
      </Box>
      <Button primary icon={<Add />} onClick={addOnClick}></Button>
      <Button primary icon={<Subtract onClick={minusOnClick} />}></Button>
    </Box>
  );
};

export default AmountInputField;
