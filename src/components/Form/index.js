import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "../Autocomplete";
import { Text } from "../Text";
import { Box } from "../Box";
import {
  getCarMaker,
  getCarModel,
  getCarYear,
  getCarVersion,
} from "../../services";

const Form = () => {
  const DEFAULT_VALUES = {
    carMaker: null,
    carModel: null,
    carYear: null,
    carVersion: null,
  };
  const [data, setData] = useState(DEFAULT_VALUES);

  const [carMakerOption, setCarMakerOption] = useState([]);
  const [carModelOption, setCarModelOption] = useState([]);
  const [carYearOption, setCarYearOption] = useState([]);
  const [carVersionOption, setCarVersionOption] = useState([]);

  useEffect(() => {
    getCarMaker().then(({ data }) => {
      setCarMakerOption(data);
    });
  }, []);

  useEffect(() => {
    getCarModel(data.carMaker).then(({ data }) => {
      setCarModelOption(data);
    });
  }, [data.carMaker]);

  useEffect(() => {
    getCarYear(data.carMaker, data.carModel).then(({ data }) => {
      setCarYearOption(data);
    });
  }, [data.carMaker, data.carModel]);

  useEffect(() => {
    debugger;
    getCarVersion(data.carMaker, data.carModel, data.carYear).then(
      ({ data }) => {
        console.log(data);
        setCarVersionOption(data);
      }
    );
  }, [data.carMaker, data.carModel, data.carYear]);

  const HandleChangeData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Autocomplete
            id="carMaker"
            label="Marca"
            value={data.carMaker}
            options={carMakerOption}
            onChange={(e, value) => HandleChangeData("carMaker", value)}
          />
          <Autocomplete
            id="carModel"
            label="Modelo"
            value={data.carModel}
            disabled={!data.carMaker}
            options={carModelOption}
            onChange={(e, value) => HandleChangeData("carModel", value)}
          />
          <Autocomplete
            id="carYear"
            label="Ano"
            value={data.carYear}
            disabled={!data.carModel}
            options={carYearOption}
            onChange={(e, value) => HandleChangeData("carYear", value)}
          />
          <Autocomplete
            id="carVersion"
            label="Versão"
            value={data.carVersion}
            disabled={!data.carYear}
            options={carVersionOption}
            onChange={(e, value) => HandleChangeData("carVersion", value)}
          />
        </Grid>
        <Grid item>
          <Text description="Conteúdo" />
        </Grid>
      </Grid>
    </Box>
  );
};
export { Form };
