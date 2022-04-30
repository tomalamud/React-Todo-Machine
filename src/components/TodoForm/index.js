import React from "react";
<<<<<<< HEAD:src/components/TodoForm/index.js
import { TodoContext } from "../TodoContext";
=======
>>>>>>> 31431f9:src/TodoForm/index.js
import './TodoForm.css';

function TodoForm({
  saveTodo,
  addTodo,
  setOpenModal
}) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  
  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        value={newTodoValue}
        placeholder="Agregar TODO"
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };