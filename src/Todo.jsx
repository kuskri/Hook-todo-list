import React from 'react';

function Todo({ todo, removeTodo }) {

    function handleRemoveClick() {
        removeTodo(todo.id);
      }

    return(
        <div className="todoElement">
            <input type="checkbox" />
            <li>{todo.task}</li>
            <button className="cancButton" onClick={handleRemoveClick}>X</button>
        </div>
    );
}
export default Todo;