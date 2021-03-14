import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  Layer,
  ResponsiveContext,
} from "grommet";
import { Notification, FormClose } from "grommet-icons";

import { Router, Route, Switch } from "react-router-dom";

import Rates from "./screens/Rates";

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
    <Grommet theme={theme} full themeMode="dark">
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button
                icon={<Notification />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Switch>
                <Route exact={true} path="/" component={Rates} />
              </Switch>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
    // </div>
  );
}

export default App;
