import React, { ComponentProps, useState } from "react";

import { Story } from "@storybook/react";

import { Box, Button, Grommet, Layer } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import CountDownTimer from "./CountDownTImer";
import { addSeconds } from "date-fns/esm";

export const Default = () => {
  const [show, setShow] = useState(false);

  const closeDialog = () => setShow(false);

  const openDialog = () => setShow(true);

  const [expiryTime, setExpiryTime] = useState(addSeconds(new Date(), 5));

  const onTimeUp = () => {
    console.log("timeup");
  };

  const refreshCountDown = () => {
    setExpiryTime(addSeconds(new Date(), 5));
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <CountDownTimer targetTime={expiryTime} onTimeup={onTimeUp} />
      </Box>
      <Box align="center">
        <Button label="Refresh" primary onClick={refreshCountDown} />
      </Box>
    </Grommet>
  );
};

// This default export determines where your story goes in the story list
export default {
  title: "CountDownTimer",
  component: CountDownTimer,
};
