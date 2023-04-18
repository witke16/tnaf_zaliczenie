import React, { useState, useRef, useEffect } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Aktualizowanie czasu trwania co 1 sekundę
      setTodos([...todos]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [todos]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') {
      return;
    }
    const newTodo = { id: new Date().getTime(), text: inputText.trim(), date: new Date(), endDate: new Date() };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  const handleTodoDelete = (todoId) => {
    const deletedTodo = todos.find((todo) => todo.id === todoId);
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    setCompletedTodos([...completedTodos, { ...deletedTodo, endDate: new Date() }]);
  };

  const timeTaken = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Jeśli endDate jest poza zakresem todos, to nie ma czasu trwania
    if (endDate > new Date()) {
      return '';
    }

    const timeDifference = Math.abs(endDate - startDate);
    console.log(timeDifference);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          ref={inputRef}
          placeholder="Enter a new todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => {
          const isCompleted = completedTodos.some((completedTodo) => completedTodo.id === todo.id);
          const endDate = isCompleted ? todo.completedDate : new Date();
          return (
            <li key={todo.id}>
              <div>
                <span>{todo.text}</span>
                <span className="todo-date">{todo.date.toLocaleString()}</span>
                {isCompleted ? (
                  <span className="time-taken">{timeTaken(todo.date, endDate)}</span>
                ) : (
                  <span className="time-taken">{timeTaken(todo.date, new Date())}</span>
                )}
              </div>
              <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      {completedTodos.length > 0 && (
        <div>
          <h2>Completed Todos</h2>
          <ul className="completed-todo-list">
            {completedTodos.map((todo) => (
              <li key={todo.id}>
                <span>{todo.text}</span>
                <span className="todo-date">{todo.date.toLocaleString()}</span>
                <span className="todo-end-date">{todo.endDate.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

};

export default TodoList;
