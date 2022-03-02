import React from 'react';
import TodoItems from './TodoItems';

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }
  handleCompleteTask(task) {
    this.props.handleCompleteTask(task);
  }

  editTask(task, text) {
    this.props.editTask(task, text);
  }

  render() {
    const { tasks } = this.props;
    const { deleteTask } = this.props;
    const todoItems = tasks.map((task) => (
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
        <div className="count">{this.props.count}</div>
        <ul className="task-list">{todoItems}</ul>
      </div>
    );
  }
}
