import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Pagination from "../../components/Pagination/Pagination";
import Spinners from "../../components/Spinners/Spinners";
import Card from "../../components/Card/Card";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 10
    }
  }

  render() {
    const { history, hotels } = this.props;
    const { currentPage, itemsPerPage } = this.state;
    let hotelList;
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = hotels.slice(indexOfFirstItem, indexOfLastItem);

    let paginate = pageNum => this.setState({ currentPage: pageNum });
    // ensure user can't continue clicking the next or previous pagination button when all items have been listed
    let nextPage = () => {
      if (this.state.currentPage >= Math.ceil(hotels.length / 10)) {
        return;

      } else {
        this.setState({ currentPage: currentPage + 1 });

      }

    };

    let prevPage = () => {
      if (this.state.currentPage <= 1) {
        return;

      } else {
        this.setState({ currentPage: currentPage - 1 })

      }

    };

    if (hotels.length > 0) {
      hotelList = currentItems.map(hotel => (
        <Card key={hotel.name} name={hotel.name} description={hotel.description} onClick={() => history.push({ pathname: `/hotel/${hotel.id}`, state: { item: hotel } })} neighborhood={hotel.neighborhood} image={hotel && hotel.images[0]} />


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
