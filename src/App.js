import React, { useEffect, useState } from 'react';
import Overview from './components/Overview';
import './App.css';

const App = ({ tasks }) => {
  const [count, setCount] = useState(tasks.length);
  const [todo, setTodo] = useState(tasks);
  const [title, setTitle] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    setTitle('');
    setCount(todo.length);
  }, [todo]);

  const addTodo = (e) => {
    e.preventDefault();
    if (title === '') return;
    const prevTodo = todo[todo.length - 1];
    const prevTodoId = prevTodo ? prevTodo.id : 0;
    const newTask = {
      userId: 1,
      id: prevTodoId + 1,
      title: title,
      completed: false,
    };
    setTodo([...todo, newTask]);
  };

  const deleteTask = (id) => {
    const arr = todo.filter((obj) => obj.id !== id);
    setTodo(arr);
  };

  const handleCompleteTask = (id) => {
    const arr = todo.map((obj) =>
      obj.id === id ? { ...obj, completed: !obj.completed } : { ...obj }
    );
    setTodo(arr);
  };

  const editTask = (id, text) => {
    if (text === '') {
      deleteTask(id);
    } else {
      const arr = [...todo];
      const index = arr.findIndex((obj) => obj.id === id);
      const task = { ...arr[index], title: text };
      arr[index] = task;
      setTodo(arr);
    }
  };

  return (
    <div className="container">
      <form onSubmit={addTodo}>
        <input type="text" placeholder="Add task" onChange={handleChange} value={title} />
        <button type="submit">Add</button>
      </form>
      <Overview
        tasks={todo}
        count={count}
        handleCompleteTask={handleCompleteTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
};
export default App;
