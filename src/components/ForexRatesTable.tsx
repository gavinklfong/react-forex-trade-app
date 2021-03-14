import React, { useState } from "react";

import { Box, Button, DataTable, Text, Heading } from "grommet";
import { ColumnConfig } from "grommet/components/DataTable";

import { ForexRate } from "../models/ForexRate";

export interface Props {
  rates: ForexRate[];
}

interface RowType {
  currencyPair: string;
  buyRate: number;
  sellRate: number;
  spread: number;
}

const columns: ColumnConfig<RowType>[] = [
  {
    property: "currencyPair",
    sortable: true,
    header: (
      <Heading size="medium" level="3">
        Instrument
      </Heading>
    ),
    primary: true,
    render: (datnum) => <Text size="xlarge">{datnum.currencyPair}</Text>,
  },
  {
    property: "buyRate",
    size: "large",
    header: (
      <Heading textAlign="center" size="medium" level="3">
        Buy Rate
      </Heading>
    ),
    render: (datnum) => (
      <Box align="center">
        <Text size="xlarge">{datnum.buyRate}</Text>
      </Box>
    ),
  },
  {
    property: "buyButton",
    size: "small",
    render: (datnum) => (
      <Button
        primary
        active
        size="medium"
        label="Buy"
        onClick={(e) => {
          console.log(e.detail);
        }}
      />
    ),
  },
  {
    property: "sellRate",
    size: "large",
    header: (
      <Heading textAlign="center" size="medium" level="3">
        Sell Rate
      </Heading>
    ),
    render: (datnum) => (
      <Box align="center">
        <Text size="xlarge">{datnum.sellRate}</Text>
      </Box>
    ),
  },
  {
    property: "sellButton",
    size: "small",
    render: (datnum) => <Button secondary active size="medium" label="Sell" />,
  },
  {
    property: "spread",
    header: (
      <Heading textAlign="center" size="medium" level="3">
        Spread
      </Heading>
    ),
    render: (datnum) => (
      <Box align="center">
        <Text size="xlarge">{datnum.spread}</Text>
      </Box>
    ),
  },
];

interface SortType {
  property: string;
  direction: "desc" | "asc";
}

const ForexRatesTable = (props: Props) => {
  const [sort, setSort] = useState<SortType>({
    property: "currencyPair",
    direction: "desc",
  });

  const convertedData = props.rates.map((item) => {
    let currencyPair = item.baseCurrency + "/" + item.counterCurrency;

    return {
      currencyPair: currencyPair,
      buyButton: currencyPair,
      sellButton: currencyPair,
      ...item,
    };
  });

  return (
    <DataTable
      columns={columns}
      data={convertedData}
      sort={sort}
      onSort={setSort}
    />
  );
};

export default ForexRatesTable;
