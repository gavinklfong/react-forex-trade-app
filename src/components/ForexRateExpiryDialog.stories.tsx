import React, { ComponentProps, useState } from "react";

import { Story } from "@storybook/react";

import { Box, Button, Grommet, Layer } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import ForexRateExpiryDialog from "./ForexRateExpiryDialog";

export const Default = () => {
  const [show, setShow] = useState(false);

  const closeDialog = () => setShow(false);

  const openDialog = () => setShow(true);

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Button label="Open" onClick={openDialog} />
        {show && (
          <Layer position="center">
            <ForexRateExpiryDialog confirm={closeDialog} cancel={closeDialog} />
          </Layer>
        )}
      </Box>
    </Grommet>
  );
};

// This default export determines where your story goes in the story list
export default {
  title: "ForexRateExpiryDialog",
  component: ForexRateExpiryDialog,
};
