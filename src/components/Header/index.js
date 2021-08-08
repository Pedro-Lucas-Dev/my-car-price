import React from "react";
import { Grid } from "@material-ui/core";
import { Text } from "../Text";
import { Icon } from "../Icon";

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Icon />
      </Grid>
      <Grid item>
        <Text
          description="Quanto vale meu carro?"
          variant="h4"
          color="textPrimary"
        />
      </Grid>
    </Grid>
  );
};

export { Header };
