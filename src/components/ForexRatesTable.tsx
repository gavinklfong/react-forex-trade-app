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
  currencyPair: string;
  buyRate: number;
  sellRate: number;
  spread: number;
}

const createTableColumnDef = (history: any) => {
  const columns: ColumnConfig<RowType>[] = [
    {
      property: "currencyPair",
      sortable: true,
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Instrument
        </Text>
      ),
      primary: true,
      render: (datnum) => <Text size="medium">{datnum.currencyPair}</Text>,
    },
    {
      property: "buyRate",
      size: "large",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Buy Rate
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">{datnum.buyRate}</Text>
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
          onClick={() => {
            console.log(datnum);
            history.push("/deal/input");
          }}
        />
      ),
    },
    {
      property: "sellRate",
      size: "large",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Sell Rate
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">{datnum.sellRate}</Text>
        </Box>
      ),
    },
    {
      property: "sellButton",
      size: "small",
      render: (datnum) => (
        <Button
          secondary
          active
          size="medium"
          label="Sell"
          onClick={() => {
            console.log(datnum);
            history.push("/deal/input");
          }}
        />
      ),
    },
    {
      property: "spread",
      align: "center",
      header: (
        <Text size="medium" weight="bold">
          Spread
        </Text>
      ),
      render: (datnum) => (
        <Box align="center">
          <Text size="medium">{datnum.spread}</Text>
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

const ForexRatesTable = (props: Props) => {
  const [sort, setSort] = useState<SortType>({
    property: "currencyPair",
    direction: "desc",
  });

  const history = useHistory();

  const columnDef = createTableColumnDef(history);

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
      columns={columnDef}
      data={convertedData}
      sort={sort}
      onSort={setSort}
    />
  );
};

export default ForexRatesTable;
