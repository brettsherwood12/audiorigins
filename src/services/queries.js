import Axios from "axios";

const bandApi = Axios.create({
  baseURL: "https://www.theaudiodb.com/api/v1/json/2/",
});

const coordsApi = Axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
});

export const getBandData = (band) => {
  return bandApi.get(`search.php?s=${band}`).then((response) => {
    return response.data;
  });
};

export const getCoordinates = (location) => {
  return coordsApi
    .get(`${location}.json?access_token=${process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN}`)
    .then((response) => {
      return response.data;
    });
};
