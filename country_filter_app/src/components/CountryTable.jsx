import React from 'react';

function CountryTable({ countries }) {

  return (

    <table>

      <thead>

        <tr>
          <th>ID</th>
          <th>Country</th>
          <th>Capital</th>
          <th>Population</th>
        </tr>

      </thead>

      <tbody>

        {countries.map((country) => (

          <tr key={country.id}>

            <td>{country.id}</td>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.population}</td>

          </tr>

        ))}

      </tbody>

    </table>

  );
}

export default CountryTable;