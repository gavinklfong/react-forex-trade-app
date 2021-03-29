import React, { useEffect, useState } from "react";
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
import { addSeconds, sub } from "date-fns";
import ForexRateExpiryDialog from "../components/ForexRateExpiryDialog";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers/rootStore";

import { rateFormatter, currencyFormatter } from "../utils/formatter";
import { bookForexRate } from "../actions/forexRateActions";
import CountDownTimer from "../components/CountDownTImer";

const dateTimeFormatter = Intl.DateTimeFormat("default", {
  dateStyle: "short",
  timeStyle: "long",
});

const ForexDealReview = (props: any) => {
  const dispatch = useDispatch();

  const dealReq = useSelector((state: RootState) => state.forex.dealReq);
  const rateBooking = useSelector(
    (state: RootState) => state.forex.rateBooking
  );

  const [showDialog, setShowDialog] = useState(false);

  const expiryTime = rateBooking?.expiryTime;

  console.log("rate expiry time = " + dateTimeFormatter.format(expiryTime));

  const [countDownTime, setCountDownTime] = useState(expiryTime);
  useEffect(() => {
    setCountDownTime(expiryTime);
  }, [expiryTime]);

  const history = useHistory();

  const cancel = () => {
    setShowDialog(false);
    history.push("/rates");
  };

  const refreshRate = () => {
    const bookingReq = {
      baseCurrency: dealReq?.baseCurrency || "",
      counterCurrency: dealReq?.counterCurrency || "",
      dealType: dealReq?.dealType || "",
      baseCurrencyAmount: dealReq?.baseCurrencyAmount || 0,
    };

    setCountDownTime(addSeconds(new Date(), 5));
    setTimeout(() => {
      dispatch(bookForexRate(bookingReq));
      setShowDialog(false);
    }, 500);
  };

  const onTimeUp = () => {
    setShowDialog(true);
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
          <FormField
            name="baseCurrencyAmount"
            label={<Text>Amount ({dealReq?.baseCurrency})</Text>}
            pad
          >
            <Text size="xl">
              {currencyFormatter.format(dealReq?.baseCurrencyAmount || 0)}
            </Text>
          </FormField>
          <FormField name="rate" label="Exchange Rate (Reserved)" pad>
            <Box direction="row" gap="xlarge">
              <Text size="xl">{rateFormatter.format(dealReq?.rate!)}</Text>
              {countDownTime && (
                <CountDownTimer
                  targetTime={countDownTime}
                  onTimeup={onTimeUp}
                />
              )}
            </Box>
          </FormField>
          <FormField
            name="counterCurrencyAmount"
            label={<Text>Amount ({dealReq?.counterCurrency})</Text>}
            pad
          >
            <Text size="xl">
              {currencyFormatter.format(dealReq?.counterCurrencyAmount || 0)}
            </Text>
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
