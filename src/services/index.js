import axios from "axios";

const BASE_URL = "https://creditas-price-api.herokuapp.com";

const getCarMaker = () => {
  return axios(`${BASE_URL}/brands`);
};
const getCarModel = (carMaker) => {
  return axios(`${BASE_URL}/brands/${carMaker}/models`);
};
const getCarYear = (carMaker, carModel) => {
  return axios(`${BASE_URL}/brands/${carMaker}/models/${carModel}/years`);
};
const getCarVersion = (carMaker, carModel, carYear) => {
  return axios(
    `${BASE_URL}/brands/${carMaker}/models/${carModel}/years/${carYear}/versions`
  );
};
const getFullCar = (carMaker, carModel, carYear, carVersion) => {
  return axios(
    `${BASE_URL}/brands/${carMaker}/models/${carModel}/years/${carYear}/versions/${carVersion}`
  );
};

export { getCarMaker, getCarModel, getCarYear, getCarVersion, getFullCar };
