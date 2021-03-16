import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import ApiService from "../../services/ApiService";
import Pagination from "../../components/Pagination/Pagination";
import Spinners from "../../components/Spinners/Spinners";
import Card from "../../components/Card/Card"
class Home extends Component {
  constructor() {
    super();
    this.state = {
      hotels: [],
      currentPage: 1,
      itemsPerPage: 10
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
    const { history } = this.props;
    const { hotels, currentPage, itemsPerPage } = this.state;
    let indexOfLastItem;
    let indexOfFirstItem;
    let currentItems;
    let paginate;
    let hotelList;
    let nextPage;
    let prevPage;
    console.log(history)

    if (hotels.length > 0) {
      indexOfLastItem = currentPage * itemsPerPage;
      indexOfFirstItem = indexOfLastItem - itemsPerPage;
      currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);

      paginate = pageNum => this.setState({ currentPage: pageNum });
      nextPage = () => this.setState({ currentPage: currentPage + 1 });
      prevPage = () => this.setState({ currentPage: currentPage - 1 });

      hotelList = currentItems.map(hotel => (
        <Card key={hotel.id} name={hotel.name} onClick={() => history.push(`/hotel/${hotel.id}`)} neighbourhood={hotel.neighbourhood} image={hotel.optimizedThumbUrls.srpDesktop} />


      ))

    } else {
      hotelList = <Spinners label="Fetching" styles={{ marginTop: "50px", color: "#DBA640" }} />
    }
    return (
      <div className="container item-container-wrapper pt-2 mt-3">

        <div className="row mx-auto w-75">
          {hotelList}

        </div>
        <div className="row w-50 mt-3 mx-auto">
          {hotelList.length > 0 ? <Pagination itemsPerPage={itemsPerPage} totalItems={hotels.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} /> : null}
        </div>
      </div>
    )
  }
}

export default withRouter(Home);
