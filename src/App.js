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
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],

    }
  }

  componentDidMount() {
    ApiService.getHotels().then(hotels => {

      let extractedHotels = [];

      hotels.forEach((hotel) => {
        extractedHotels.push({
          name: hotel.venue.name,
          neighborhood: hotel.venue.location.neighborhood,
          rating: hotel.venue.rating,
          images: extractImages(hotel),
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

