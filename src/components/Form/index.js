import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Autocomplete } from "../Autocomplete";
import { Box } from "../Box";
import {
  getCarMaker,
  getCarModel,
  getCarYear,
  getCarVersion,
  getFullCar,
} from "../../services";
import { CarInformations } from "./components/Card";

const Form = () => {
  const DEFAULT_VALUES = {
    carMaker: null,
    carModel: null,
    carYear: null,
    carVersion: { versionId: "", version: "" },
  };
  const [data, setData] = useState(DEFAULT_VALUES);
  const [carMakerOption, setCarMakerOption] = useState([]);
  const [carModelOption, setCarModelOption] = useState([]);
  const [carYearOption, setCarYearOption] = useState([]);
  const [carVersionOption, setCarVersionOption] = useState([]);
  const [carInformation, setCarInformation] = useState({});

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
    getCarVersion(data.carMaker, data.carModel, data.carYear).then(
      ({ data }) => {
        setCarVersionOption(data);
      }
    );
  }, [data.carMaker, data.carModel, data.carYear]);

  useEffect(() => {
    getFullCar(
      data.carMaker,
      data.carModel,
      data.carYear,
      data.carVersion.versionId
    ).then(({ data }) => {
      console.log(data);
      setCarInformation(data);
    });
  }, [data.carMaker, data.carModel, data.carYear, data.carVersion]);

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
            getOptionLabel={(option) => option.version}
            onChange={(e, value) => HandleChangeData("carVersion", value)}
          />
        </Grid>
        <Grid item>
          <CarInformations car={carInformation} />
        </Grid>
      </Grid>
    </Box>
  );
};
export { Form };
