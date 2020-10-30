import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

const App = () => {
  const [value, setValue] = useState('btholt');
  const [cards, setCards] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(`https://api.github.com/users/${value}`);
      response = await response.json();
      setCards(response);
    }
    fetchData();
  }, [value]);

  return (
    <div className="App">
      <SearchBar setSearchTerm={setValue} />
      <Card data={cards} />.
    </div>
  );
};

export default App;

// const fetchMyAPI = useCallback(async () => {
//   let response = await fetch(`https://api.github.com/users/${data[0]}`);
//   response = await response.json();
//   setCards(response);
// }, []);

// useEffect(() => {
//   fetchMyAPI();
// }, [fetchMyAPI]);
