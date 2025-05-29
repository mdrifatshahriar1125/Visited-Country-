import { use } from "react";
import Country from "../county/country";
import './countries.css'

export default function Countries({countryinfo}){
    const readcountryinfo=use(countryinfo);
    // console.log(readcountryinfo);
    
    return(
        <>
        <h1>Number Of Country : {readcountryinfo.length}</h1>
        <div className="countries">
            {
            readcountryinfo.map(country=><Country key={country.name.common} country={country}></Country>)
            }
        </div>
        </>

        
    )
}