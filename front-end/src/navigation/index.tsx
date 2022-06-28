import { Box } from "@material-ui/core";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { ROUTE_HOME, ROUTE_DETAILS } from "./constants";
import { HomeScreen, BlockDetailsScreen } from "../screens";

const Navigation = () => {
  return (
    <Box>
      <BrowserRouter>
        {/* Public screens */}
        <Redirect exact from={"/"} to={ROUTE_HOME} />
        <Route exact path={ROUTE_HOME} component={HomeScreen} />
        <Route
          exact
          path={ROUTE_DETAILS}
          component={BlockDetailsScreen}
        />
      </BrowserRouter>
    </Box>
  );
};

export default Navigation;
