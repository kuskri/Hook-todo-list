import React from 'react';
import Todo from './Todo';

function ToDoList ({todos, removeTodo}) {
    
    return(
        <div className="ToDoList">
            <ul className="lista">
                {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;