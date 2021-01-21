import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import CreditCard from "../CreditCard/CreditCard";
import "./pagination.css";

const Pagination = ({ /* pageSize,  totalCount, currentPage,*/ cards }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 20;
  const offset = currentPage * PER_PAGE;
  const currentPageData = cards
    .slice(offset, offset + PER_PAGE)
    .map((card, i) => <CreditCard cards={card} key={i} />);
  const pageCount = Math.ceil(cards.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  return (
    <>
      <div className="flex flex-wrap justify-center gap-14 mb-14">
        {currentPageData}
      </div>

      <div className="mb-40 justify-center">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
        />
      </div>
    </>

    // <div>
    //   {paginatedCards.map((card, i) => (
    //     // <CreditCard cards={card} key={i} />
    //     <h1>{card.FirstName}</h1>
    //   ))}

    //   <div>Page {pageNumber} </div>
    //   <div>
    //     <button onClick={handlePrev}>prev</button>
    //     <button onClick={handleNext}>next</button>
    //   </div>
    // </div>
  );
};

export default Pagination;
