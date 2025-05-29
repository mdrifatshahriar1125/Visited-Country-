

import { Suspense } from 'react';
import './App.css'
import Countries from './component/countries/countries';

function App() {

  const countryinfo=fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json());
  

  return (
    <>
     <h1>this is new page</h1>
     <Suspense fallback={<h3>countries data is loading</h3>}>
     <Countries countryinfo={countryinfo}></Countries>

     </Suspense>
    </>
  )
}

export default App
