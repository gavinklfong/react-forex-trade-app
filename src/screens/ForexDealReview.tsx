import React from "react";
import { Heading, Box } from "grommet";
import { RouterAnchor } from "../components/RouteAnchor";

const ForexDealReview = (props: any) => {
  return (
    <Box fill>
      <Heading size="large" level="1">
        ForexDealConfirm
      </Heading>
      <RouterAnchor label="Next" path="/deal/confirm" />
    </Box>
  );
};

export default ForexDealReview;
