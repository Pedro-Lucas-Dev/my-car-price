import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { useStyles } from "./useStyles";

const Box = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Paper variant="outlined" className={classes.paper}>
        {children}
      </Paper>
    </Grid>
  );
};

export { Box };
