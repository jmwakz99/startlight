import React from 'react'

import { checkStars } from "../../utils/general";
import "./Rating.css";
function Rating({ value }) {

  checkStars(value)
  return (

    <div>
      <div className="main">

        <i className="fa fa-star unchecked"></i>
        <i className="fa fa-star unchecked"></i>
        <i className="fa fa-star unchecked"></i>
        <i className="fa fa-star unchecked"></i>
        <i className="fa fa-star unchecked"></i>
      </div >
    </div>
  )
}

export default Rating;
