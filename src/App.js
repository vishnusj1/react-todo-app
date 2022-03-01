import React from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
      title: '',
      count: this.props.tasks.length,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }
  addTask(e) {
    e.preventDefault();
    if (this.state.title === '') return;
    const lastTask = this.state.tasks[this.state.tasks.length - 1];
    const lastTaskId = lastTask ? lastTask.id : 0;
    const newTask = {
      userId: 1,
      id: lastTaskId + 1,
      title: this.state.title,
      completed: false,
    };

    this.setState((prevState) => ({
      tasks: this.state.tasks.concat(newTask),
      title: '',
      count: prevState.count + 1,
    }));
  }

  deleteTask(id) {
    console.log(id);
    const tasks = this.state.tasks.filter((obj) => obj.id !== id);
    this.setState((prevState) => ({
      tasks: tasks,
      count: prevState.count - 1,
    }));
  }

  handleCompleteTask(task) {
    const arr = [...this.state.tasks];
    const index = arr.findIndex((obj) => obj.id === task.id);
    const obj = { ...arr[index], completed: !task.completed };
    arr[index] = obj;
    this.setState(
      {
        tasks: arr,
      },
      () => console.log(this.state.tasks)
    );
  }

  editTask(task, text) {
    const arr = [...this.state.tasks];
    const index = arr.findIndex((obj) => obj.id === task.id);
    const obj = { ...arr[index], title: text };
    arr[index] = obj;
    this.setState(
      {
        tasks: arr,
      },
      () => console.log(this.state.tasks[index])
    );
  }
  render() {
    const { tasks, title, count } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.addTask}>
          <input type="text" placeholder="Add task" onChange={this.handleChange} value={title} />
          <button type="submit">Add</button>
        </form>
        <Overview
          tasks={tasks}
          count={count}
          handleCompleteTask={this.handleCompleteTask}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </div>
    );
  }
}
export default App;
