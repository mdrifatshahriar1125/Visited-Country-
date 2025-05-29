import { use } from "react";
import Country from "../county/country";
import './countries.css'
import { useState } from "react";


export default function Countries({countryinfo}){
    const readcountryinfo=use(countryinfo);
    // console.log(readcountryinfo);
        // const [countVisitedCountry , setCountVisitedCountry]=useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
       
    // const handleVisitedCountry =(country)=>{
    //     // console.log('your recent visit county is :',country)
    //     setCountVisitedCountry([...countVisitedCountry, country.name.common]);
    //     setVisitedCountryFlags([...VisitedCountryFlags, country.flags.png]);
    //     console.log(VisitedCountryFlags);
    // }
       const handleVisitedCountry = (country) => {
        // prevent duplicates if needed
        if (!visitedCountries.find(c => c.name.common === country.name.common)) {
            setVisitedCountries([...visitedCountries, country]);
        }
    };
   
   
    
    return(
        <>
        {
            console.log(visitedCountries)
        }
        <h1>Number Of Country : {readcountryinfo.length}</h1>
        <h1>Number Of Visited Country : {visitedCountries.length}</h1>
        <h1>Visited Countries are</h1>
        <ol>
              {
                    visitedCountries.map((country, index) => (
                        <li key={index}>
                           <h2 style={{display:'inline',margin:'5px'}}> {country.name.common} </h2> 
                            <img src={country.flags.png} alt={`${country.name.common} flag`} width="40" height='15' />
                        </li>
                    ))
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