import { Box } from "grommet";
import React from "react";

const BoxComponent = (props: any) => {
  return (
    <Box
      fill
      direction="column"
      justify="center"
      gap="medium"
      pad="large"
      background="light-4"
    >
      <Box background="neutral-1" pad="medium" align="center">
        A
      </Box>
      <Box background="neutral-2" pad="medium" align="center">
        B
      </Box>
      <Box background="neutral-3" pad="medium" align="center">
        C
      </Box>
    </Box>
  );
};

export default BoxComponent;
