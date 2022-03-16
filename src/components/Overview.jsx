import React, { useState } from 'react';
import FilterButton from './FilterButton';
import TodoItems from './TodoItems';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const Overview = ({ tasks, count, handleCompleteTask, deleteTask, editTask }) => {
  const [filter, setFilter] = useState('All');

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} setFilter={setFilter} />
  ));
  const todoItems = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <TodoItems
        task={task}
        key={task.id}
        id={task.id}
        title={task.title}
        completed={task.completed}
        handleDelete={deleteTask}
        handleCompleteTask={handleCompleteTask}
        editTask={editTask}
      />
    ));
  return (
    <div className="Overview">
      <div className="listHeader">
        <div className="filterButtons">{filterList}</div>
        <div className="count">{count}</div>
      </div>
      <ul className="task-list">{todoItems}</ul>
    </div>
  );
};
export default Overview;
