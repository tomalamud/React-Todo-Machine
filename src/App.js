import React from "react";
import './App.css'

import { TodoCounter } from "./components/TodoCounter/index";
import { TodoSearch } from "./components/TodoSearch/index";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoButton } from "./components/TodoButton";

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a react', completed: true },
  { text: 'Llorar con la llorona', completed: false },
];
 
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <div className="App">
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch 
        search={searchValue} 
        setSearch={setSearchValue}/>

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
          ))}
      </TodoList>

      <TodoButton text="Abriste el modal!"/>
    </div>
  );
}

export default App;
