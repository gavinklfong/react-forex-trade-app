import React, { useState } from "react";

import { Box, Button, DataTable, Text, Heading } from "grommet";
import { ColumnConfig } from "grommet/components/DataTable";

import { ForexDeal } from "../models/ForexDeal";
import { useHistory } from "react-router";

export interface Props {
  records: ForexDeal[];
  // createDeal: (baseCurrency: string, counterCurrency: string) => void;
}

interface RowType {
  timestamp: Date;
  currencyPair: string;
  baseCurrency: string;
  counterCurrency: string;
  rate: number;
  dealType: string;
  baseCurrencyAmount: number;
  counterCurrencyAmount: number;
}

const dateFormatter = Intl.DateTimeFormat("default", {
  dateStyle: "medium",
  timeStyle: "medium",
});

const createTableColumnDef = () => {
  const columns: ColumnConfig<RowType>[] = [
    {
      property: "timestamp",
      sortable: true,
      align: "start",
      size: "xlarge",
      header: (
        <Text size="medium" weight="bold">
          Timestamp
        </Text>
      ),
      primary: true,
      render: (datnum) => (
        <Text size="medium">{dateFormatter.format(datnum.timestamp)}</Text>
      ),
    },
    {
      property: "currencyPair",
      sortable: true,
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Instrument
        </Text>
      ),
      render: (datnum) => <Text size="medium">{datnum.currencyPair}</Text>,
    },
    {
      property: "rate",
      size: "medium",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Rate
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">{datnum.rate.toFixed(4)}</Text>
        </Box>
      ),
    },
    {
      property: "dealType",
      size: "xsmall",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Deal Type
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text
            size="medium"
            color={
              datnum.dealType.toUpperCase() === "BUY"
                ? "neutral-3"
                : "neutral-4"
            }
          >
            {datnum.dealType.toUpperCase()}
          </Text>
        </Box>
      ),
    },
    {
      property: "baseCurrencyAmount",
      size: "large",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Amount (Base Currency)
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">
            {new Intl.NumberFormat("default", {
              style: "currency",
              currency: datnum.baseCurrency,
              currencyDisplay: "symbol",
            }).format(datnum.baseCurrencyAmount)}
          </Text>
        </Box>
      ),
    },
    {
      property: "counterCurrencyAmount",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Amount (Counter Currency)
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">
            {new Intl.NumberFormat("default", {
              style: "currency",
              currency: datnum.counterCurrency,
              currencyDisplay: "symbol",
            }).format(datnum.counterCurrencyAmount)}
          </Text>
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

  const convertedData = props.records.map((item) => {
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

export default ForexDealsHistoryTable;
