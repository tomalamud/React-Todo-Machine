import React from "react";
import './App.css'

import { TodoCounter } from "../components/TodoCounter/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoButton } from "../components/TodoButton";
 
function AppUI({
  loading,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div className="App">
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch 
        search={searchValue} 
        setSearch={setSearchValue}/>

      <TodoList>
        {/* {error && <p>Hubo un error</p>} */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
          ))}
      </TodoList>

      <TodoButton text="Abriste el modal!"/>
    </div>
  );
}

export default AppUI;
