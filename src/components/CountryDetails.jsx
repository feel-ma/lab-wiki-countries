import { useParams, use } from "react-router-dom"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CountriesList from "./CountriesList";
import { useState, useEffect } from "react";


function CountryDetails({countries}){


    const [t, tt] = useState()
    
    const params = useParams();


    const obj=  countries.find((country) => {
        if(country.alpha3Code === params.alpha3code) return country
    } )

    const booo= obj.borders.map((border) =>
    countries.find((Br) =>{
        if(border=== Br.alpha3Code)
        return Br
    })
    )

    useEffect(() => {
        fetch(`https://ih-countries-api.herokuapp.com/countries/${params}`)
          .then((response) => response.json())
          .then((data) => tt(data))
          
    
          console.log(countries)
          console.log("countries")
          console.log("sdas")
          console.log("dfs")
    
    
    
      }, []); 
    



    return(

        <>

        <CountriesList countries={countries} />
        <div>
            <div>
            {obj.name.common}
            </div>
            <p>{obj.capital}</p>
            <p>{obj.area} Km</p>
            {
                booo.map((b)=>{
                    return (
                     <div>    <Link to={`/countries/${b.alpha3Code}`}>{b.name.common}</Link></div>
                    )
                }
                )
            }
            

        </div>

        </>
    )
}
export default CountryDetails