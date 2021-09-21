import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
    window.scrollTo(0, 0);
  }
  return (
    <ul className="pagination justify-content-end mt-2">
      <li className="page-item disabled">
        <a className="page-link font-size-13" href="#" tabIndex="-1">
          Previous
        </a>
      </li>

      {pageNumbers.map((number, key) => (
        <li className="page-item" key={key}>
          <Link
            onClick={() => paginate(number)}
            className="page-link font-size-15"
            style={{ cursor: "pointer" }}
          >
            {number}
          </Link>
        </li>
      ))}
      <li>
        <a className="page-link font-size-13" href="#">
          Next
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
