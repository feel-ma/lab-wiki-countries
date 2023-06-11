import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function CountriesList(probs) {
  const [paesi, paesiF] = useState(probs.countries);

  return (

    <>

{paesi.map((p) => (
           <div>

               <Link to={`/countries/${p.alpha3Code}`}> aaa {p.name.common}</Link>
           </div>
         
        ))}

    </>
   
       
      
  
  );
}

export default CountriesList;
