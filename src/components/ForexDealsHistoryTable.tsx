import React, { useState } from "react";

import { Box, Button, DataTable, Text, Heading } from "grommet";
import { ColumnConfig } from "grommet/components/DataTable";

import { ForexRate } from "../models/ForexRate";
import { useHistory } from "react-router";

export interface Props {
  rates: ForexRate[];
  // createDeal: (baseCurrency: string, counterCurrency: string) => void;
}

interface RowType {
  timestamp: Date;
  currencyPair: string;
  rate: number;
  baseCurrencyAmount: number;
  counterCurrencyAmount: number;
}

const createTableColumnDef = () => {
  const columns: ColumnConfig<RowType>[] = [
    {
      property: "timestamp",
      sortable: true,
      align: "start",
      header: (
        <Heading size="medium" level="3">
          Timestamp
        </Heading>
      ),
      primary: true,
      render: (datnum) => <Text size="xlarge">{datnum.timestamp}</Text>,
    },
    {
      property: "currencyPair",
      sortable: true,
      align: "center",
      header: (
        <Heading size="medium" level="3">
          Instrument
        </Heading>
      ),
      render: (datnum) => <Text size="xlarge">{datnum.currencyPair}</Text>,
    },
    {
      property: "rate",
      size: "large",
      align: "center",
      header: (
        <Heading size="medium" level="3">
          Rate
        </Heading>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="xlarge">{datnum.rate}</Text>
        </Box>
      ),
    },
    {
      property: "baseCurrencyAmount",
      size: "large",
      align: "center",
      header: (
        <Heading size="medium" level="3">
          Amount (Base Currency)
        </Heading>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="xlarge">{datnum.baseCurrencyAmount}</Text>
        </Box>
      ),
    },
    {
      property: "counterCurrencyAmount",
      align: "center",
      header: (
        <Heading size="medium" level="3">
          Amount (Counter Currency)
        </Heading>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="xlarge">{datnum.counterCurrencyAmount}</Text>
        </Box>
      ),
    },
  ];

  return columns;
};

interface SortType {
  property: string;
  direction: "desc" | "asc";
}

const ForexDealsHistoryTable = (props: Props) => {
  const [sort, setSort] = useState<SortType>({
    property: "timestamp",
    direction: "desc",
  });

  const columnDef = createTableColumnDef();

  const convertedData = props.rates.map((item) => {
    let currencyPair = item.baseCurrency + "/" + item.counterCurrency;

    return {
      currencyPair: currencyPair,
      ...item,
    };
  });

  return (
    <DataTable
      columns={columnDef}
      data={convertedData}
      sort={sort}
      onSort={setSort}
    />
  );
};

export default ForexRatesTable;
