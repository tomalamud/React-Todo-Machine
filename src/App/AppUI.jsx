import React from "react";
import './App.css'

import { TodoContext } from "../components/TodoContext";

import { TodoCounter } from "../components/TodoCounter/index";
import { TodoSearch } from "../components/TodoSearch/index";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoButton } from "../components/TodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../components/modal";
 
function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
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

export default AppUI;
