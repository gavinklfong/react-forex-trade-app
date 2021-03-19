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

const ForexDealReview = (props: any) => {
  const [countDownStyle, setCountDownStyle] = useState("accent-2");

  const countDownOnChange = (time: string) => {
    if (time === "P0H0M0S") {
      setCountDownStyle("status-critical");
    } else {
      setCountDownStyle("accent-2");
    }
  };

  const history = useHistory();

  const cancel = () => {
    history.push("/rates");
  };

  const submit = () => {
    history.push("/deal/confirm");
  };

  return (
    <Box fill pad="medium" align="center">
      <Box align="start" gap="medium">
        <Heading size="small" level="1" alignSelf="center">
          Review Deal
        </Heading>
        <ThemeContext.Extend value={customTheme}>
          <Form onSubmit={submit}>
            <FormField name="baseCurrencyAmount" label="Amount (GBP)" pad>
              <Text size="xl">100</Text>
            </FormField>
            <FormField name="rate" label="Exchange Rate (Reserved)" pad>
              <Box direction="row" gap="xlarge">
                <Text size="xl">1.7940</Text>
                <Box direction="row" gap="medium">
                  <Text color={countDownStyle} size="xl">
                    (
                  </Text>
                  <Text color={countDownStyle} size="xl">
                    Valid By:{" "}
                  </Text>
                  <Text color={countDownStyle}>
                    <Clock
                      type="digital"
                      time="PT0H0M05S"
                      run="backward"
                      onChange={(time: any) => {
                        console.log(time);
                        countDownOnChange(time);
                      }}
                    />
                  </Text>
                  <Text color={countDownStyle} size="xl">
                    )
                  </Text>
                </Box>
              </Box>
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
              <Button type="submit" label="Confirm" primary onClick={submit} />
              <Button label="Cancel" onClick={cancel} />
            </Box>
          </Form>
        </ThemeContext.Extend>
      </Box>
    </Box>
  );
};

export default ForexDealReview;
