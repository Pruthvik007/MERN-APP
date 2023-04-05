import React, { useEffect, useState } from "react";

const Pagination = ({ pageCount, onChange }) => {
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    onChange(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination pagination-sm">
          {pageNumber > 0 && (
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Previous"
                onClick={() => {
                  setPageNumber(pageNumber - 1);
                }}
              >
                <i className="fa fa-solid fa-arrow-left"></i>
              </button>
            </li>
          )}
          <li className="page-item">
            <button className="page-link" href="#">
              {pageNumber + 1}
            </button>
          </li>
          {pageNumber + 1 < pageCount && (
            <li className="page-item">
              <button
                className="page-link"
                aria-label="Next"
                onClick={() => {
                  setPageNumber(pageNumber + 1);
                }}
              >
                <i className="fa fa-solid fa-arrow-right"></i>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
