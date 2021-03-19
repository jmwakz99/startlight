import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import ApiService from "./services/ApiService";
import { extractImages } from "./utils/general";
import Navigation from "./parts/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Home from "./pages/Home/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      lat: 37.788719679657554,
      long: -122.40057774847898


    }
  }

  componentDidMount() {
    this.getHotels()





  }
  getHotels = () => {
    const { lat, long } = this.state;
    ApiService.getHotels(lat, long).then(hotels => {

      let extractedHotels = [];

      hotels.forEach((hotel) => {
        extractedHotels.push({
          name: hotel.venue.name,
          neighborhood: hotel.venue.location.neighborhood,
          rating: hotel.venue.rating,
          images: extractImages(hotel),
          description: "Praesent finibus tortor nunc, in sodales sapien consectetur id. Aenean condimentum lacus erat, quis aliquam nibh venenatis nec. Duis nec vehicula magna, non finibus ipsum.",
          id: hotel.venue.id.resy


        })



      }


      )
      if (hotels.length === extractedHotels.length) {
        this.setState({
          hotels: extractedHotels
        })



      }


    }).catch(error => {
      console.log(error)
    })

  }
  // This won't populate the required hotels based on the current user location
  // The reason is the api provider only accepts these coords lat=37.788719679657554 long=-122.40057774847898
  checkUserCurrentLocation = () => {
    ApiService.getUserLocation(({ coords: { latitude, longitude } }) => {
      this.setState({
        lat: latitude,
        long: longitude
      })



    }, (error) => {
      console.log(error)
    })

  }
  render() {


    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home hotels={this.state.hotels} />

            </Route>
            <Route exact path="/hotel/:id">
              <HotelDetails />

            </Route>
          </Switch>


        </div>
      </Router>



    )
  }
}

export default App;

