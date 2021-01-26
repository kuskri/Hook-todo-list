import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoForm ({addTodo}) {
    const [todo, setTodo] = useState({
      id: '',
      task: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (todo.task.trim()) {
          addTodo({...todo, id: uuidv4() });
          setTodo({...todo, task: ""});
        }
    };

    const handleChange = (event) => { 
        setTodo({...todo, task: event.target.value}); 
      }; 

    return (
        <form onSubmit={handleSubmit}>
        <input className="input" name="task" type="text" onChange={handleChange} value={todo.task} placeholder="Implementa la lista" /> 
        <button type="submit" className="addTodo" >+</button>
        </form>
    );

}
export default TodoForm;