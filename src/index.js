import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TASKS = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
