import './country.css'

export default function Country({country}){
    console.log(country)
    console.log(country.name)
    return(
        <div className="singlecountry">
            <h3>country name : {country.name.common}</h3>
        </div>
    )

}