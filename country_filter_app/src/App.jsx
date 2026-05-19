import './App.css';
import React, { useState } from 'react';

import CountryFilter from './components/CountryFilter';
import CountryTable from './components/CountryTable';
import CountryAdd from './components/CountryAdd';


const initialCountries = [
  {
    id: 1,
    name: 'India',
    capital: 'New Delhi',
    population: '1.4 Billion'
  },
  {
    id: 2,
    name: 'USA',
    capital: 'Washington DC',
    population: '331 Million'
  },
  {
    id: 3,
    name: 'Japan',
    capital: 'Tokyo',
    population: '125 Million'
  }
];

function App() {

  const [countries, setCountries] = useState(initialCountries);

  const [search, setSearch] = useState('');

  // Filter Logic
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add Country
  const addCountry = (newCountry) => {

    setCountries([
      ...countries,
      {
        id: countries.length + 1,
        ...newCountry
      }
    ]);

  };

  return (

    <div className="app-container">

      <h1>Country Management System</h1>

      <CountryFilter
        search={search}
        setSearch={setSearch}
      />

      <CountryAdd
        addCountry={addCountry}
      />

      <CountryTable
        countries={filteredCountries}
      />

    </div>

  );
}

export default App;