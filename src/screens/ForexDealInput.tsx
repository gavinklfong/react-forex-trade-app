import React from "react";
import { Heading, Box } from "grommet";
import { RouterAnchor } from "../components/RouteAnchor";

const ForexDealInput = (props: any) => {
  return (
    <Box fill>
      <Heading size="large" level="1">
        ForexDealInput
      </Heading>
      <RouterAnchor label="Next" path="/deal/review" />
    </Box>
  );
};

export default ForexDealInput;
