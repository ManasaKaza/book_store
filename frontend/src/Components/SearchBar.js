import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/home?query=${encodeURIComponent(query)}`);
    console.log('Searching for:', query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
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
          style={{ marginRight: "200px" }}
        >
          <i className="search icon"></i>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
