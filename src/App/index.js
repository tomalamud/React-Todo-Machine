import React from "react";
import './App.css'

import { useTodos } from "./useTodos";
import { TodoHeader } from "../components/TodoHeader";
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
    addTodo,
  } = useTodos();
  return (
    <div className="App">
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        onError={() => <p>Hubo un error</p>}
        loading={loading}
        onLoading={() => <p>Estamos cargando, no desesperes...</p>}
        searchedTodos={searchedTodos}
        onEmptyTodos={() => <p>¡Crea tu primer TODO!</p>}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onEmptySearchResults={search => (
          <p>No hay resultados para: {search}</p>
        )}
        // render={todo => (
        //   <TodoItem 
        //     key={todo.text} 
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        //   )}
      >
      {todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <TodoButton setOpenModal={setOpenModal} text="Abriste el modal!"/>
    </div>
  );
}

export default App;
