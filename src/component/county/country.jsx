import { useState } from 'react'
import './country.css'

export default function Country({country,handleVisitedCountry}){
    // console.log(country)
    const [visited,setvisited]=useState(false);

    const visitcountry=()=>{
        visited? setvisited(false):setvisited(true);

        // setvisited(!visited)
        handleVisitedCountry(country);
    }
    
    return(
        <div className={`singlecountry ${visited && "visited"}`}>
            <h3>Name of the country : {country.name.common}</h3>
            <h3>official name : {country.name.official}</h3>

            
            <img src={country.flags.png} alt="flag not found yet" />
            <button className={visited?'btn-visited':null} onClick={visitcountry}>{
                visited?'visited':'not visited'
                }</button>

        </div>
    )

}