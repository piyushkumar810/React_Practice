import React from 'react';

function CountryFilter({ search, setSearch }) {

  return (

    <div className="filter-box">

      <input
        type="text"
        placeholder="Search Country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>

  );
}

export default CountryFilter;