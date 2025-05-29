import { use } from "react";
import Country from "../county/country";
import './countries.css'
import { useState } from "react";


export default function Countries({countryinfo}){
    const readcountryinfo=use(countryinfo);
    // console.log(readcountryinfo);
        const [countVisitedCountry , setCountVisitedCountry]=useState([]);
    const handleVisitedCountry =(country)=>{
        // console.log('your recent visit county is :',country)
        setCountVisitedCountry([...countVisitedCountry, country.name.common]);
        console.log([...countVisitedCountry, country.name.common]);
    }
   
    
    return(
        <>
        <h1>Number Of Country : {readcountryinfo.length}</h1>
        <h1>Number Of Visited Country : {countVisitedCountry.length}</h1>
        <h1>Visited Countries are</h1>
        <ol>
            {
                countVisitedCountry.map(country=><li>{country}</li>)
            }
        </ol>
        <div className="countries">
            {
            readcountryinfo.map(country=><Country 
                key={country.name.common} 
                country={country}
                handleVisitedCountry={handleVisitedCountry}></Country>)
            }
        </div>
        </>

        
    )
}