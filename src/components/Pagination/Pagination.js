import React from "react";
import { NavLink } from "react-router-dom";

function Pagination({ itemsPerPage, totalItems, paginate, nextPage, prevPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);

  }
  return (
    <nav className="mx-auto" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <NavLink className="page-link" to="" onClick={() => prevPage()}>
            <span aria-hidden="true">&laquo;</span>
          </NavLink>
        </li>
        {pageNumbers.map(num => (
          <li key={num}>
            <NavLink onClick={() => paginate(num)} className="page-link" to="">{num}</NavLink>
          </li>
        ))}
        <li className="page-item">
          <NavLink className="page-link" to="" onClick={() => nextPage()}>
            <span aria-hidden="true">&raquo;</span>
          </NavLink>
        </li>

      </ul>
    </nav >
  )
}

export default Pagination
