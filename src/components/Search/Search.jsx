import React, { useState } from "react";

function Search({ cards, handleSearch, searchResults }) {
  const [active, setActive] = useState(false);
  // console.log(cards, 'from search');

  const handleChange = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "") {
      handleSearch(cards);
    } else {
      let searchResult = cards.filter((card) => {
        return (
          card.FirstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          card.LastName.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      handleSearch(searchResult);
    }
  };

  return (
    <div className={`search ${active ? "active" : ""}`}>
      <input
        onChange={handleChange}
        type="text"
        className="input"
        placeholder="search..."
      />
      <button
        onClick={() => {
          // console.log('yes');
          setActive(!active);
          document.querySelector(".input").focus();
        }}
        className="btn"
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search;
