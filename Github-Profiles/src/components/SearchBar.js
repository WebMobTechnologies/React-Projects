import React, { useState, useEffect, useRef } from 'react';
import './SearchBar.styles.scss';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ placeholder = 'Search here...', setSearchTerm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <>
      <div className="search-bar">
        <label htmlFor="search-input" className="search-label">
          <FiSearch className="search-icon" />
          <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </label>
      </div>
    </>
  );
};

export default SearchBar;
