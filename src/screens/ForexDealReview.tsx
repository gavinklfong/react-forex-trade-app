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
  Layer,
} from "grommet";

import { useHistory } from "react-router";
import ForexRateExpiryDialog from "../components/ForexRateExpiryDialog";

const ForexDealReview = (props: any) => {
  const [countDownStyle, setCountDownStyle] = useState("accent-2");

  const [showDialog, setShowDialog] = useState(false);

  const [countDownTime, setCountDownTime] = useState("PT0H0M05S");

  const countDownOnChange = (time: string) => {
    if (time === "P0H0M0S") {
      setCountDownStyle("status-critical");
      setShowDialog(true);
    } else {
      setCountDownStyle("accent-2");
    }
  };

  const history = useHistory();

  const cancel = () => {
    setShowDialog(false);
    history.push("/rates");
  };

  const refreshRate = () => {
    setCountDownTime("PT0H0M00S");
    setTimeout(() => {
      setCountDownTime("PT0H0M05S");
      setCountDownStyle("accent-2");
      setShowDialog(false);
    }, 500);
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
                    time={countDownTime}
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
        {showDialog && (
          <Layer position="center">
            <ForexRateExpiryDialog confirm={refreshRate} cancel={cancel} />
          </Layer>
        )}
      </Box>
    </Box>
  );
};

export default ForexDealReview;
