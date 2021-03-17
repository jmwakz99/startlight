import React from "react";

function Pagination({ itemsPerPage, totalItems, paginate, nextPage, prevPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);

  }
  return (
    <nav className="mx-auto" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <span className="page-link" style={{ cursor: "pointer" }} onClick={() => prevPage()}>
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        {pageNumbers.map(num => (
          <li key={num}>
            <span style={{ cursor: "pointer" }} onClick={() => paginate(num)} className="page-link" to="">{num}</span>
          </li>
        ))}
        <li className="page-item">
          <span className="page-link" style={{ cursor: "pointer" }} onClick={() => nextPage()} >
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>

      </ul>
    </nav >
  )
}

export default Pagination;
