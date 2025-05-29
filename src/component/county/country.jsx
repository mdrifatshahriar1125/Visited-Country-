import './country.css'

export default function Country({country}){
    console.log(country)
    
    return(
        <div className="singlecountry">
            <h3>country name : {country.name.common}</h3>
            <h3>country flag </h3>
            <img src={country.flags.png} alt="flag not found yet" />
        </div>
    )

}