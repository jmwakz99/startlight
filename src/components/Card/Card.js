import React from "react";

import "./Card.css"
function Card({ name, neighbourhood, image, onClick }) {
  return (

    <div className="col-md-6 mt-5 col-sm-12 item">
      <div className="card item-card card-block">
        <img src={image} alt="Hotel" onClick={onClick} />
        <div className="item-card__title mt-3 mb-3">
          <span className="item-card__title__name"><span className="item-card__title__name_badge small">{name}</span></span>
          <span className="item-card__title__neighbourhood"><span className="badge badge-pill badge-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg> {neighbourhood}</span></span>
        </div>
        <div className="item-card__card-text text-muted">Sed imperdiet velit est, faucibus tortor tincidunt.</div>
      </div>
    </div>


  )
}

export default Card
