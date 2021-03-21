import { Box, Heading, Text, Button } from "grommet";
import React from "react";

interface Props {
  confirm: () => void;
  cancel: () => void;
}

const RateExpiryDialog = (props: Props) => {
  return (
    <Box pad="medium" gap="xsmall" width="medium">
      <Heading size="small" level="3">
        Confirm
      </Heading>
      <Text>Rate has expired, do you want to reserve a new rate?</Text>
      <Box
        as="footer"
        gap="small"
        direction="row"
        align="center"
        justify="end"
        pad={{ top: "medium", bottom: "small" }}
      >
        <Button label="OK" primary onClick={props.confirm} />
        <Button label="Cancel" onClick={props.cancel} />
      </Box>
    </Box>
  );
};

export default RateExpiryDialog;
