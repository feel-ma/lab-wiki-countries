// src/App.js
import "./App.css";

import cFile from "./countries.json"

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // <== IMPORT


import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {

  const [countries, setCountries] = useState(cFile)
 // const countries = []

 
/* 
  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch(error => console.error(error));

      console.log(countries)
      console.log("countries")
      console.log("sdas")
      console.log("dfs")



  }, []); 
 */


// path="countries/:alpha3code" useParams().alpha3code
  return <div className="App">

    <Routes>
          <Route path="/countries" element={ <CountriesList countries={countries} />}> </Route>
          <Route path="/countries/:alpha3code" element={<CountryDetails countries={countries}/>} />



    </Routes>

   


    


  </div>;
}
export default App;