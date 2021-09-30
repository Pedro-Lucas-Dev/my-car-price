import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { Text } from "../../../Text";
export const CarInformations = ({ car }) => {
  const { brand, kmMedio, model, modelYear, pisoPrecoConcessionaria } = car;
  return (
    <Card>
      <CardContent>
        <Text description={brand} />
        <Text description={model} />
        <Text description={kmMedio} />
        <Text description={modelYear} />
        <Text description={pisoPrecoConcessionaria} />
      </CardContent>
    </Card>
  );
};
