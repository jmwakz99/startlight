import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ApiService from "../../services/ApiService";
import Carousel from "../../components/Carousel/Carousel";
import "./HotelDetails.css";

class HotelDetails extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      ApiService.getHotelImages(id).then(res => {
        this.setState({
          images: res
        })

      }).catch(err => console.log(err))

    }


  }
  render() {
    const { name, address: { locality } } = this.props.location.state.item;
    const { images } = this.state;
    return (
      <div>
        <Carousel images={images} name={name} locality={locality} />
        <div className="pt-5 mt-5 pb-5">
          <div className="text-center w-75 mx-auto text-muted">
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








