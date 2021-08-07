import React from "react";
import { Grid } from "@material-ui/core";
import Text from "../Text";

const Header = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Text
        description="Quanto vale meu carro?"
        variant="h4"
        color="textPrimary"
      />
    </Grid>
  );
};

export default Header;
