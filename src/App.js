import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';

function App() {
  const [cardDetails, setCardDetails ] = useState([]);
  const [searchResults, setSearchResults] = React.useState([]);

    console.log(cardDetails);


  const fetchData = async () => {
    const response = await fetch('https://api.enye.tech/v1/challenge/records');
    const data = await response.json();
    return data
  }
  // const cards = useRef();
  // cards.current = cardDetails;
    // console.log(cardDetails,'111111');
    // console.log(cards.current,'22222222');


const handleSearch = (value) => {
  // console.log('im alive');
// setCardDetails(value);
setSearchResults(value);
}

  useEffect(()=>{
  fetchData()
   .then(res =>{
     setCardDetails(res.records.profiles);
     setSearchResults(res.records.profiles);
    //  console.log(res, 'im here mofo')
   })
  // console.log(okay, "yes na")

  // cards.current = cardDetails
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleGender = (e) =>{
      // console.log(e.target.value);
    if(e.target.value === 'reset'){
      setSearchResults(cardDetails)
    } else {
      const filtered = cardDetails.filter(card =>{
        // return console.log(card, 'work na' )
        return card.Gender === e.target.value
      })

      // console.log(filtered, 'my filter is back');
      setSearchResults(filtered)
    } 
  }

  const handlePaymentMethod = (e) =>{
      // console.log(e.target.value);
    if(e.target.value === 'reset'){
      setSearchResults(cardDetails)
    } else {
      const filtered = cardDetails.filter(card =>{
        // return console.log(card, 'work na' )
        return card.PaymentMethod === e.target.value
      })

      // console.log(filtered, 'my filter is back');
      setSearchResults(filtered)
    } 
  }


console.log(searchResults,'RS');
  return (
    <>
    <Navbar 
    handleSearch={handleSearch}
    cards={cardDetails}
    searchResults={searchResults}
    />
  
    <div style={{"marginTop": "150px"}} /> {/* this is to push contents after navBar down because i made the navbar fixed */}
    <div>

    <div>
    {/* <label htmlFor="filter"> filter by:  </label> */}
    <select onChange={handleGender} name="filter" id="filter">
              <option value="">Filter cards by Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Prefer to skip">Prefer to skip</option>
              <option value="reset">Reset</option>
           </select>

    <select onChange={handlePaymentMethod} name="paymentMethod" id="paymentMethod">
              <option value="">Filter cards by Payment Method</option>
              <option value="check">Check</option>
              <option value="money order">Money Order</option>
              <option value="paypal">PayPal</option>
              <option value="cc">CC</option>
              <option value="reset">Reset</option>
           </select> 
    </div>

      <h1>I am enye</h1>
      <ul>
        {
       searchResults.length <= 0 ?  'NO cards to display...' : searchResults.map((card,i) => (
       <li key={i}>{card.FirstName} {card.LastName} {card.Gender} {card.PaymentMethod}</li>
       )) 
        }
      </ul>
      {/* {console.log(cardDetails.length,'cardd')} */}
    </div>

    </>
  );
}

export default App;
