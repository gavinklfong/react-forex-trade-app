import { Box, Form, FormField, TextInput, Text, Select } from "grommet";
import { Search } from "grommet-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForexRates } from "../actions/forexRateActions";
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

  useRates();

  const rates = useSelector((state: RootState) => state.forex.rates);
  const defaultBaseCurrencies = useSelector(
    (state: RootState) => state.forex.baseCurrencies
  );

  const [selectedBaseCurrency, setSelectedBaseCurrency] = useState(["GBP"]);

  const [baseCurrencyOptions, setBaseCurrencyOptions] = useState(
    defaultBaseCurrencies
  );

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
          onChange={({ nextValue }) => {
            setSelectedBaseCurrency(nextValue);
            dispatch(fetchForexRates(nextValue));
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
        <ForexRatesTable rates={rates} />
      </Box>
    </Box>
  );
};

export default ForexRates;
