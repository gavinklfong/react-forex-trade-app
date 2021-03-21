import { Box, Form, FormField, TextInput, Text } from "grommet";
import { Search } from "grommet-icons";
import React from "react";
import ForexRatesTable from "../components/ForexRatesTable";

import { useRates } from "../hooks/RatesHook";

const ForexRates = (props: any) => {
  const forexRates = useRates("GBP");

  return (
    <Box direction="column" gap="medium" margin={{ top: "medium" }}>
      <Box width="small">
        <TextInput icon={<Search />} reverse placeholder="Base Currency" />
      </Box>
      <Box>
        <ForexRatesTable rates={forexRates} />
      </Box>
    </Box>
  );
};

export default ForexRates;
