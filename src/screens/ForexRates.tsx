import { Box, Form, FormField, TextInput, Text, Select } from "grommet";
import { Search } from "grommet-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createForexDeal } from "../actions/forexDealActions";
import {
  fetchForexRates,
  selectBaseCurrency,
} from "../actions/forexRateActions";
import ForexRatesTable from "../components/ForexRatesTable";

import { useRates } from "../hooks/RatesHook";
import { RootState } from "../reducers/rootStore";

// improving Search support of special characters
const getRegExp = (text: string) => {
  // The line below escapes regular expression special characters:
  // [ \ ^ $ . | ? * + ( )
  const escapedText = text.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");

  // Create the regular expression with modified value which
  // handles escaping special characters. Without escaping special
  // characters, errors will appear in the console
  return new RegExp(escapedText, "i");
};

const ForexRates = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useRates();

  const rates = useSelector((state: RootState) => state.forex.rates);
  const selectedBaseCurrency = useSelector(
    (state: RootState) => state.forex.baseCurrency
  );
  const defaultBaseCurrencies = useSelector(
    (state: RootState) => state.forex.baseCurrencies
  );

  const [baseCurrencyOptions, setBaseCurrencyOptions] = useState(
    defaultBaseCurrencies
  );

  const gotoDealInputScreen = (
    baseCurrency: string,
    counterCurrency: string,
    dealType: string
  ) => {
    // dispatch(createForexDeal(baseCurrency, counterCurrency, dealType));

    const params =
      encodeURIComponent("baseCurrency") +
      "=" +
      encodeURIComponent(baseCurrency) +
      "&" +
      encodeURIComponent("counterCurrency") +
      "=" +
      encodeURIComponent(counterCurrency) +
      "&" +
      encodeURIComponent("dealType") +
      "=" +
      encodeURIComponent(dealType);

    history.push({
      pathname: "/deal/input",
      search: params,
    });
  };

  return (
    <Box direction="column" gap="medium" margin={{ top: "medium" }}>
      <Box width="large" direction="row" gap="medium">
        <Box justify="center">
          <Text size="medium" weight="bold">
            Base Currency
          </Text>
        </Box>
        <Select
          icon={<Search />}
          options={baseCurrencyOptions}
          value={[selectedBaseCurrency]}
          size="medium"
          onChange={({ value: nextValue }) => {
            dispatch(selectBaseCurrency(nextValue));
          }}
          closeOnChange={true}
          onClose={() => setBaseCurrencyOptions(defaultBaseCurrencies)}
          onSearch={(text: string) => {
            const exp = getRegExp(text);
            setBaseCurrencyOptions(
              text.trim().length === 0
                ? defaultBaseCurrencies
                : defaultBaseCurrencies.filter((c) => exp.test(c))
            );
          }}
        />
      </Box>
      <Box>
        <ForexRatesTable
          rates={rates}
          tradeButtonOnClick={gotoDealInputScreen}
        />
      </Box>
    </Box>
  );
};

export default ForexRates;
