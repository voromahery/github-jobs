import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import { Pagination } from "../components";

export default function FooterContainer() {
  const { pageNumber, currentPage, setCurrentPage } = useContext(Context);
  const pages = [
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  pages.length = pageNumber || 2;

  function displayPagination(e) {
    setCurrentPage(e.target.value);
  }

  function nextPage() {
    if (pageNumber > currentPage) {
      setCurrentPage(Math.ceil(currentPage + 1));
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(Math.ceil(currentPage - 1));
    }
  }

  return (
    <Pagination>
      <Pagination.List>
        {currentPage > 0 && (
          <Pagination.Arrow onClick={prevPage}>❮</Pagination.Arrow>
        )}
        {pages.map((page, index) => (
          <Pagination.ListItem key={index}>
            <Pagination.Button
              className={page === currentPage + 1 && "current"}
              disabled={page === currentPage + 1 && true}
              onClick={(value) => displayPagination(value)}
              value={index}
            >
              {page}
            </Pagination.Button>
          </Pagination.ListItem>
        ))}
        {pageNumber - 1 > currentPage && (
          <Pagination.Arrow onClick={nextPage}>❯</Pagination.Arrow>
        )}
      </Pagination.List>
    </Pagination>
  );
}
