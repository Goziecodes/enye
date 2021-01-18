import React from 'react';
import './navbar.css';
import Search from './Search/Search';

function Navbar() {
    return (
        <div id='nav-container'>
          <div id="logo"><h2>Credit card</h2></div>
          <Search />
        </div>
    )
}

export default Navbar
