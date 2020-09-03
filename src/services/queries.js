import Axios from "axios";

const bandApi = Axios.create({
  baseURL: "https://www.theaudiodb.com/",
});

const coordsApi = Axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`,
});

export const getBandOrigin = (band) => {
  return bandApi.get(`api/v1/json/1/search.php?s=${band}`).then((response) => {
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
