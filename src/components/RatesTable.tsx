import React from "react";

import { Box, DataTable, Text } from "grommet";

import { ForexRate } from "../models/ForexRate";

export interface Props {
  rates: Rate[];
}

const columns: ColumnConfig<RowType>[] = [
  {
    property: "baseCurrency",
    header: <Text></Text>,
  },
];

const RatesTable = (props: Props) => {
  return <p>RatesTable</p>;
};

export default RatesTable;
