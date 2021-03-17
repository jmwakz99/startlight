import React from 'react'


import "./Carousel.css";
function Carousel({ name, locality, images }) {
  console.log(images)
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
              <div className="carousel-item active"> <img src="https://i.imgur.com/weXVL8M.jpg" alt="Hotel" /> </div>
              <div className="carousel-item"> <img src="https://i.imgur.com/Rpxx6wU.jpg" alt="Hotel" /> </div>
              <div className="carousel-item"> <img src="https://i.imgur.com/83fandJ.jpg" alt="Hotel" /> </div>
              <div className="carousel-item"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" alt="Hotel" /> </div>
            </div><a className="carousel-control-prev" href="#custCarousel" data-slide="prev"> <span className="carousel-control-prev-icon"></span> </a> <a className="carousel-control-next" href="#custCarousel" data-slide="next"> <span className="carousel-control-next-icon"></span> </a>
            <ol className="carousel-indicators list-inline">
              <li className="list-inline-item active"> <span id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel"> <img src="https://i.imgur.com/weXVL8M.jpg" className="img-fluid" alt="Hotel" /> </span> </li>
              <li className="list-inline-item"> <span id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel"> <img src="https://i.imgur.com/Rpxx6wU.jpg" className="img-fluid" alt="Hotel" /> </span> </li>
              <li className="list-inline-item"> <span id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel"> <img src="https://i.imgur.com/83fandJ.jpg" className="img-fluid" alt="Hotel" /> </span> </li>
              <li className="list-inline-item"> <span id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel"> <img src="https://i.imgur.com/JiQ9Ppv.jpg" className="img-fluid" alt="Hotel" /> </span> </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Carousel;
