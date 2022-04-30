import React from 'react';
import './TodoCounter.css';


function TodoCounter({ totalTodos , completedTodos }) {
  return <h2 className='TodoCounter'>Completaste {completedTodos} de {totalTodos} TODOs</h2>
};

export { TodoCounter };