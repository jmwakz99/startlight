import React from 'react'

import "./Rating.css";
function Rating() {
  return (
    <div>
      <div class="main">
        <i class="fa fa-star checked" id="one"></i>
        <i class="fa fa-star unchecked" id="two"></i>
        <i class="fa fa-star unchecked" id="three"></i>
        <i class="fa fa-star unchecked" id="four"></i>
        <i class="fa fa-star unchecked" id="five"></i>
      </div >
    </div>
  )
}

export default Rating;
