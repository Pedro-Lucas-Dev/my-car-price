import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({ variant, color, description }) => {
  return (
    <Typography variant={variant} color={color}>
      {description}
    </Typography>
  );
};

export default Text;
