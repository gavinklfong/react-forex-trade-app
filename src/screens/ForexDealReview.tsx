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

import AmountInputField from "../components/AmountInputField";
import { useHistory } from "react-router";
import { deepMerge } from "grommet/utils";
import ForexRateExpiryDialog from "../components/ForexRateExpiryDialog";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/rootStore";

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

const rateFormatter = Intl.NumberFormat("default", {
  maximumFractionDigits: 4,
});

const ForexDealReview = (props: any) => {
  const dealReq = useSelector((state: RootState) => state.forex.dealReq);

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
        <ThemeContext.Extend value={customTheme}>
          <Form onSubmit={submit}>
            <FormField
              name="baseCurrencyAmount"
              label={<Text>Amount ({dealReq?.baseCurrency})</Text>}
              pad
            >
              <Text size="xl">{dealReq?.baseCurrencyAmount}</Text>
            </FormField>
            <FormField name="rate" label="Exchange Rate (Reserved)" pad>
              <Box direction="row" gap="xlarge">
                <Text size="xl">{rateFormatter.format(dealReq?.rate!)}</Text>
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
            <FormField
              name="counterCurrencyAmount"
              label={<Text>Amount ({dealReq?.counterCurrency})</Text>}
              pad
            >
              <Text size="xl">{dealReq?.counterCurrencyAmount}</Text>
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
