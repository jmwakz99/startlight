// import axios from "axios";
// import { optionsSearchHotels } from "./ApiConfig";

const data = require('../utils/getUserLocation.json');

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getHotels: async function (lat, lon) {
    try {
      // const response = await axios.request(optionsSearchHotels(lat, lon));
      return data.results.venues;
      // return response.data.results.venues;

    } catch (error) {
      throw error
    }
  },
  getUserLocation: function (onSuccess, onError) {
    try {
      const response = navigator.geolocation.getCurrentPosition(onSuccess, onError);
      return response;

    } catch (error) {
      throw error
    }
  }

}