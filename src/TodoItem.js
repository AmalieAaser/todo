import React from 'react';

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div
      className={`todo ${todo.completed ? 'completed' : ''}`}
    >
      <span onClick={() => toggleTodo(index)}>{todo.text}</span>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  );
}

export default TodoItem;
