import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Carousel from "../../components/Carousel/Carousel";

class HotelDetails extends Component {
  constructor() {
    super()
    this.state = {
      images: [],

    }
  }
  componentDidMount() {
    // this is to ensure the component re-renders so that the rating can take effect
    this.setState({})
  }



  render() {
    const { name, neighborhood, images, rating } = this.props.location.state.item;


    return (
      <div>
        <Carousel images={images} name={name} locality={neighborhood} rating={rating} refresh={this.refresh} />

        <div className="pt-5 mt-5 pb-5">
          <div className="text-center w-50 mx-auto text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.

        </div>

        </div>

      </div>
    )
  }
}

export default withRouter(HotelDetails);








