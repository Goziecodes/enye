import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/NavBar/Navbar.jsx';

function App() {
  const [cardDetails, setCardDetails ] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://api.enye.tech/v1/challenge/records');
    const data = await response.json();
    return data


  }



  useEffect(()=>{
  fetchData()
   .then(res =>{
     setCardDetails(res.records.profiles);
     console.log(res, 'im here mofo')
   })
  // console.log(okay, "yes na")



  },[])


  return (
    <>
    <Navbar />
    <div style={{"margin-top": "150px"}} /> {/* this is to push contents after navBar down because i made the navbar fixed */}
    <div>
      <h1>I am enye</h1>
      <ul>
        {
       cardDetails.length <= 0 ?  'Loading.....' : cardDetails.map((card,i) => (
            <li key={i}>{card.FirstName}</li>
       )) 
        }
      </ul>
      {console.log(cardDetails.length,'cardd')}
    </div>

    </>
  );
}

export default App;
