import React from "react";
import { Grid } from "@material-ui/core";

const Layout = ({ children }) => {
  return <Grid container>{children}</Grid>;
};

export { Layout };
