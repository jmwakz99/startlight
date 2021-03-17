import axios from "axios";
import { optionsSearchHotels, optionsSearchHotelImages, optionsSearchHotelDetails } from "./ApiConfig";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getHotels: async function (lat, lon) {
    try {
      const response = await axios.request(optionsSearchHotels(lat, lon));
      return response.data.data.body.searchResults.results;

    } catch (error) {
      throw error
    }
  },
  getHotelImages: async function (id) {
    try {
      const response = await axios.request(optionsSearchHotelImages(id));
      return response.data.hotelImages.filter((image, index) => index < 4);

    } catch (error) {
      throw error;
    }
  },
  getHotelDetails: async function (id) {
    try {
      const response = await axios.request(optionsSearchHotelDetails());
      return response.data.data.body.searchResults.results;

    } catch (error) {
      throw error
    }
  },
  // getUserLocation: function () {
  //   try {
  //     const response = navigator.geolocation.getCurrentPosition;
  //     return response;

  //   } catch (error) {
  //     throw error
  //   }
  // }

}