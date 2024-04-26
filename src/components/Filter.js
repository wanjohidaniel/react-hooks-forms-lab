import React, { useState } from "react";

function Filter({ search, onSearchChange }) {
  const [searchText, setSearchText] = useState(search);

  const handleSearchChange = (event) => {
    const newText = event.target.value;
    setSearchText(newText);
    if (typeof onSearchChange === 'function') {
      onSearchChange(newText); // Pass the updated search text to the parent component
    }
  };
  

  return (
    <div className="Filter">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
