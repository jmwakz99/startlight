import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Navigation from "./parts/Navigation/Navigation";
import HotelDetails from "./pages/HotelDetails/HotelDetails";
import Home from "./pages/Home/Home";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />

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

