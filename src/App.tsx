import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  Layer,
  ResponsiveContext,
  Header,
  Anchor,
  Nav,
  Grid,
  Text,
} from "grommet";
import { Notification, FormClose, Grommet as GrommetIcon } from "grommet-icons";

import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { createBrowserHistory } from "history";

import { RouterAnchor } from "./components/RouteAnchor";

import ForexRates from "./screens/ForexRates";
import ForexDealHistory from "./screens/ForexDealHistory";
import ForexDealInput from "./screens/ForexDealInput";
import ForexDealReview from "./screens/ForexDealReview";
import ForexDealDone from "./screens/ForexDealDone";

// const history = createBrowserHistory();

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const AppHeader = (props: any) => (
  <Header background="brand" pad="medium">
    <Anchor href="#">
      <Text size="large">Forex Trading Service</Text>
    </Anchor>
    <Box justify="end" direction="row" gap="medium">
      <Nav direction="row">
        <RouterAnchor as={Link} label="Rates" path="/rates" />
        <RouterAnchor as={Link} label="Deal History" path="/deal/history" />
      </Nav>
    </Box>
  </Header>
);

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <Grommet theme={theme} full themeMode="dark">
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppHeader />

              <Grid
                fill
                columns={["xsmall", "auto", "xsmall"]}
                areas={[["left-margin", "content", "right-margin"]]}
              >
                <Box gridArea="left-margin" />
                <Switch>
                  <Route exact={true} path="/" component={ForexRates} />
                  <Route exact={true} path="/rates" component={ForexRates} />
                  <Route
                    exact={true}
                    path="/deal/history"
                    component={ForexDealHistory}
                  />
                  <Route
                    exact={true}
                    path="/deal/input"
                    component={ForexDealInput}
                  />
                  <Route
                    exact={true}
                    path="/deal/review"
                    component={ForexDealReview}
                  />
                  <Route
                    exact={true}
                    path="/deal/confirm"
                    component={ForexDealDone}
                  />
                </Switch>
                <Box gridArea="right-margin" />
              </Grid>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
    // </div>
  );
}

export default App;
