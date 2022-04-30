import React from 'react';
import './TodoSearch.css';

<<<<<<< HEAD
function TodoSearch({ searchValue, setSearchValue }) {
=======
function TodoSearch({ searchValue, setSearchValue }) {  
>>>>>>> 31431f9
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    // setSearch(event.target.value)
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  ];
}

export { TodoSearch };
