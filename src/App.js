import React,{useState} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  

  return (
    <div className="body">
      <div className="App">
        <header className="App-header">
          <h1>La mia Lista</h1>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} removeTodo={removeTodo} />
        </header>
      </div>
    </div>
  );
}

export default App;
