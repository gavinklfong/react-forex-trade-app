import { Box, Form, FormField, TextInput, Text } from "grommet";
import { Search } from "grommet-icons";
import React from "react";
import { useSelector } from "react-redux";
import ForexRatesTable from "../components/ForexRatesTable";

import { useRates } from "../hooks/RatesHook";
import { RootState } from "../reducers/rootStore";

const ForexRates = (props: any) => {
  useRates();

  const rates = useSelector((state: RootState) => state.forex.rates);

  return (
    <Box direction="column" gap="medium" margin={{ top: "medium" }}>
      <Box width="small">
        <TextInput icon={<Search />} reverse placeholder="Base Currency" />
      </Box>
      <Box>
        <ForexRatesTable rates={rates} />
      </Box>
    </Box>
  );
};

export default ForexRates;
