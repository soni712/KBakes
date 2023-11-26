import axios from "axios";

export const getCountryList = async () => {
  return axios.get(`https://testapi.devtoolsdaily.com/countries`);
};
