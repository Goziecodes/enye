import React from 'react';
import './navbar.css';
import Search from './Search/Search';

function Navbar({handleSearch, cards, searchResults}) {
  // console.log(cards, 'here');
    return (
        <div id='nav-container'>
          <div id="logo"><h2>Credit card</h2></div>
          <Search
           handleSearch={handleSearch}
           cards={cards}
           searchResults={searchResults}
           />
          
        </div>
    )
}

export default Navbar
