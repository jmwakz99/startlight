import axios from "axios";
import { options } from "./ApiConfig";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  getHotels: async function () {
    try {
      const response = await axios.request(options);
      return response.data.data.body.searchResults.results;

    } catch (error) {
      throw error
    }
  }

}