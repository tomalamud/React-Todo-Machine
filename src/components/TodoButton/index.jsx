import React from 'react';
import './TodoButton.css'

function TodoButton(props) {
  const onClickButton = (msg) => {
    // props.setOpenModal(prevState => !prevState);
    alert(msg)
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("abriste el modal")}
    >+</button>
  );
};

export { TodoButton };