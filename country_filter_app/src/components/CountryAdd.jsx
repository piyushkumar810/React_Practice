import React, { useState } from 'react';

function CountryAdd({ addCountry }) {

  const [name, setName] = useState('');
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!name || !capital || !population) {
      alert('Please fill all fields');
      return;
    }

    addCountry({
      name,
      capital,
      population
    });

    setName('');
    setCapital('');
    setPopulation('');

  };

  return (

    <form className="add-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Country Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Capital"
        value={capital}
        onChange={(e) => setCapital(e.target.value)}
      />

      <input
        type="text"
        placeholder="Population"
        value={population}
        onChange={(e) => setPopulation(e.target.value)}
      />

      <button type="submit">

        Add Country

      </button>

    </form>

  );
}

export default CountryAdd;