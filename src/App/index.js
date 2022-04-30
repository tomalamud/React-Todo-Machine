import React from "react";
import './App.css'

import { useTodos } from "./useTodos";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoButton } from "../components/TodoButton";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../components/modal";

function App() { 
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    saveTodo,
    addTodo,
  } = useTodos();
  return (
    <div className="App">
      <TodoCounter
        totalTodos={totalTodos} 
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {error && <p>Hubo un error</p>}
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
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <TodoButton setOpenModal={setOpenModal} text="Abriste el modal!"/>
    </div>
  );
}

export default App;