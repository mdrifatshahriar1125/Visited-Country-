import { use } from "react";
import Country from "../county/country";

export default function Countries({countryinfo}){
    const readcountryinfo=use(countryinfo);
    // console.log(readcountryinfo);
    
    return(
        <div>
            <h1>total country : {readcountryinfo.length}</h1>
            <h2>country name : {}</h2>
            {
            readcountryinfo.map(country=><Country country={country}></Country>)
            }
        </div>
    )
}