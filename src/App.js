import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar.jsx";
// import CreditCard from "./components/CreditCard/CreditCard.jsx";
import Pagination from "./components/Pagination/Pagination";

function App() {
  const [cardDetails, setCardDetails] = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);
  // const [currentPage, setCurrentPage] = useState(0);

  // console.log(cardDetails.length, "my length");

  const fetchData = async () => {
    const response = await fetch("https://api.enye.tech/v1/challenge/records");
    const data = await response.json();
    return data;
  };

  const handleSearch = (value) => {
    // console.log('im alive');
    // setCardDetails(value);
    setSearchResults(value);
  };

  useEffect(() => {
    fetchData().then((res) => {
      setCardDetails(res.records.profiles);
      setSearchResults(res.records.profiles);
    });
  }, []);

  const handleGender = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "reset") {
      setSearchResults(cardDetails);
    } else {
      const filtered = cardDetails.filter((card) => {
        // return console.log(card, 'work na' )
        return card.Gender === e.target.value;
      });

      // console.log(filtered, 'my filter is back');
      setSearchResults(filtered);
    }
  };

  const handlePaymentMethod = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "reset") {
      setSearchResults(cardDetails);
    } else {
      const filtered = cardDetails.filter((card) => {
        // return console.log(card, 'work na' )
        return card.PaymentMethod === e.target.value;
      });

      // console.log(filtered, 'my filter is back');
      setSearchResults(filtered);
    }
  };

  return (
    <>
      <Navbar
        handleSearch={handleSearch}
        cards={cardDetails}
        searchResults={searchResults}
      />
      <div style={{ marginTop: "150px" }} />{" "}
      {/* this is to push contents after navBar down because i made the navbar fixed */}
      <div className="filters mb-16 flex flex-wrap gap-10 justify-center">
        <select
          className="rounded-md appearance-none  border-gray-400 shadow-sm py-4  text-xl"
          onChange={handleGender}
          name="filter"
          id="filter"
        >
          <option value="">Filter cards by Gender 🡇</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Prefer to skip">Prefer to skip</option>
          <option value="reset">Reset</option>
        </select>

        <select
          className="rounded-md  border-gray-400 shadow-sm py-4 px-2 appearance-none text-xl"
          onChange={handlePaymentMethod}
          name="paymentMethod"
          id="paymentMethod"
        >
          <option value="">Filter cards by Payment Method 🡇 </option>
          <option value="check">Check</option>
          <option value="money order">Money Order</option>
          <option value="paypal">PayPal</option>
          <option value="cc">CC</option>
          <option value="reset">Reset</option>
        </select>
      </div>
      {searchResults.length <= 0 ? (
        <div flex justify-center>
          <p text-center> NO cards to display...</p>
        </div>
      ) : (
        <Pagination className="" cards={searchResults} />
      )}
    </>
  );
}

export default App;
