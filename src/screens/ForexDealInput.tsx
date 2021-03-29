import React from "react";
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
} from "grommet";

import AmountInputField from "../components/AmountInputField";
import { useHistory } from "react-router";
import { deepMerge } from "grommet/utils";
import { useDealInput } from "../hooks/RatesHook";
import { RootState } from "../reducers/rootStore";
import { useDispatch, useSelector } from "react-redux";
import { updateForexDealAmount } from "../actions/forexDealActions";
import { rateFormatter, currencyFormatter } from "../utils/formatter";
import { bookForexRate } from "../actions/forexRateActions";

const ForexDealInput = (props: any) => {
  const dispatch = useDispatch();

  useDealInput();

  const dealReq = useSelector((state: RootState) => state.forex.dealReq);

  const updateBaseCurrencyAmount = (amount: number) => {
    let rate = 0;
    if (dealReq != null && dealReq.rate != null) {
      rate = dealReq.rate;
    }

    const counterCurrencyAmount = amount * rate;
    dispatch(updateForexDealAmount(amount, counterCurrencyAmount));
  };

  const history = useHistory();

  const cancel = () => {
    history.push("/rates");
  };

  const submit = () => {
    const bookingReq = {
      baseCurrency: dealReq?.baseCurrency || "",
      counterCurrency: dealReq?.counterCurrency || "",
      dealType: dealReq?.dealType || "",
      baseCurrencyAmount: dealReq?.baseCurrencyAmount || 0,
    };

    dispatch(bookForexRate(bookingReq));
    history.push("/deal/review");
  };

  return (
    <Box fill pad="medium" align="center">
      <Box align="start" gap="medium">
        <Heading size="small" level="1" alignSelf="center">
          Create Deal
        </Heading>
        <Form onSubmit={submit}>
          <FormField
            name="baseCurrencyAmount"
            label={<Text>Amount ({dealReq?.baseCurrency})</Text>}
            pad
            required
          >
            <AmountInputField
              value={dealReq?.baseCurrencyAmount}
              onChange={updateBaseCurrencyAmount}
            />
          </FormField>
          <FormField name="rate" label="Exchange Rate (Indicative)" pad>
            <Text size="xl">{rateFormatter.format(dealReq?.rate!)}</Text>
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
          <FormField name="dealType" label="Deal Type" pad>
            <Text size="xl">{(dealReq?.dealType || "").toUpperCase()}</Text>
          </FormField>
          <Box
            direction="row"
            justify="start"
            gap="medium"
            margin={{ top: "medium" }}
          >
            <Button type="submit" label="Next" primary onClick={submit} />
            <Button label="Cancel" onClick={cancel} />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default ForexDealInput;
