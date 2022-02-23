import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import MyForm from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: ['robert', 'jack', 'prison mike', 'oscar', 'jim', 'pamela'],
    };
    this.countUp = this.countUp.bind(this);
    this.AddPeople = this.AddPeople.bind(this);
  }

  componentDidMount() {
    this.setState({
      count: this.state.people.length,
    });
  }

  countUp() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      this.getSnapshotBeforeUpdate
    );
  }

  AddPeople(e) {
    e.preventDefault();
    this.countUp();
    console.log('YAY');
  }

  render() {
    return (
      <div>
        <MyComponent name={randomPerson(this.state.people)} />
        <p>Number of peoples : {this.state.count}</p>
        <MyForm AddPeople={this.AddPeople} />
      </div>
    );
  }
}

function randomPerson(arr) {
  const person = arr[Math.floor(Math.random() * arr.length)];
  return person;
}

export default App;
