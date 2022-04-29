import React from 'react';
// import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch({ search, setSearch }) {
  // const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value)
    // setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      // value={searchValue}
      onChange={onSearchValueChange}
    />,
    <p>{search}</p>
  ];
}

export { TodoSearch };
