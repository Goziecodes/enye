import React from "react";
import "./navbar.css";
import Search from "../Search/Search";

function Navbar({ handleSearch, cards, searchResults }) {
  // console.log(cards, 'here');
  return (
    <div
      className=" w-full h-20 bg-gray-50 fixed top-0 flex justify-around items-center"
      id="nav-container"
    >
      <div id="logo">
        <h2 className="text-4xl font-bold">Credit card</h2>
      </div>
      <Search
        handleSearch={handleSearch}
        cards={cards}
        searchResults={searchResults}
      />
    </div>
  );
}

export default Navbar;
