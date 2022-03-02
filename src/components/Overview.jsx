import React from 'react';
import FilterButton from './FilterButton';
import TodoItems from './TodoItems';

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
    };
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  handleCompleteTask(task) {
    this.props.handleCompleteTask(task);
  }

  editTask(task, text) {
    this.props.editTask(task, text);
  }
  setFilter(filter) {
    this.setState(
      {
        filter,
      },
      () => console.log(this.state.filter)
    );
  }

  render() {
    const { tasks } = this.props;
    const { deleteTask } = this.props;
    const filterList = FILTER_NAMES.map((name) => (
      <FilterButton key={name} name={name} setFilter={this.setFilter} />
    ));

    const todoItems = tasks
      .filter(FILTER_MAP[this.state.filter])
      .map((task) => (
        <TodoItems
          task={task}
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          handleDelete={deleteTask}
          handleCompleteTask={this.handleCompleteTask}
          editTask={this.editTask}
        />
      ));
    return (
      <div className="Overview">
        <div className="listHeader">
          <div className="filterButtons">{filterList}</div>
          <div className="count">{this.props.count}</div>
        </div>
        <ul className="task-list">{todoItems}</ul>
      </div>
    );
  }
}
