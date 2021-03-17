import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import ApiService from "./services/ApiService";
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
      this.setState({
        hotels: hotels
      })

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

