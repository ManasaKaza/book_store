// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <form className="search-bar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="book name or author"
          aria-label="Search"
          aria-describedby="search-button"
          value={query}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="search-button"
          onClick={handleSubmit}
          style={{ marginRight: "200px" }}
        >
          <i class="search icon"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
