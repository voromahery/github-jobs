import React, { useContext } from "react";
import { Context } from "../GlobalContext";
import { Footer } from "../components";
import { styled } from 'styled-components';

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

  pages.length = pageNumber;

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

  console.log(currentPage);

  return (
    <Footer>
      <Footer.List>
        {currentPage > 0 && <Footer.Button onClick={prevPage}>❮</Footer.Button>}
        {pages.map((page, index) => (
          <Footer.ListItem key={index}>
            <Footer.Button
              onClick={(value) => displayPagination(value)}
              value={index}
            >
              {page}
            </Footer.Button>
          </Footer.ListItem>
        ))}
        {pageNumber - 1 > currentPage && (
          <Footer.Button onClick={nextPage}>❯</Footer.Button>
        )}
      </Footer.List>
    </Footer>
  );
}
