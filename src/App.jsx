

import { Suspense } from 'react';
import './App.css'
import Countries from './component/countries/countries';

function App() {

  const countryinfo=fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json());
  

  return (
    <>
    <div>
       <Suspense fallback={<h3> Data is loading , Please wait....</h3>}>
     <Countries  countryinfo={countryinfo}></Countries>

     </Suspense>
    </div>
    </>
  )
}

export default App
