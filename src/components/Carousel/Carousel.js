import React from 'react'


import { convertToString } from "../../utils/general";
import Spinners from "../../components/Spinners/Spinners";
import Rating from "../../components/Rating/Rating";
import "./Carousel.css";
function Carousel({ name, locality, images }) {
  let carouselItemLarge;
  let carouselItemSmall;
  if (images.length > 0) {
    carouselItemLarge = images.map((image, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : null}`}> <img src={image.sizeEightHundred} alt="Hotel" /> </div>

    ))
    carouselItemSmall = images.map((image, index) => (
      <li className="list-inline-item active"> <span id={`carousel-selector-${index}`} className={`${index === 0 ? "selected" : null}`} data-slide-to={convertToString(index)} data-target="#custCarousel"> <img src={image.sizeTwoHundred} className="img-fluid" alt="Hotel" /> </span> </li>


    ))


  } else {
    carouselItemLarge = <Spinners label="Sorry no photos" styles={{ marginTop: "50px" }} />
    carouselItemSmall = <Spinners label="Sorry no photos" styles={{ marginTop: "50px" }} />
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="pt-5 carousel-title">
            <h4>{name}</h4>
            <h4 className="badge badge-pill"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg> {locality}</h4>
          </div>

        </div>


      </div>


      <div className="row">
        <div className="col-md-12">
          <div id="custCarousel" className="carousel slide" data-ride="carousel" align="center">
            <div className="carousel-inner">
              {carouselItemLarge}


            </div><a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
            <Rating />
            <ol className="carousel-indicators list-inline">
              {carouselItemSmall}

            </ol>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Carousel;
