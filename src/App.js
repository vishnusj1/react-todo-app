import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import MyForm from './components/Form';
import Clock from './components/Clock';
import FilterableProductTable from './components/FilterableProductTable';
// import logo from './logo.svg';

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
        <MyComponent name={randomPerson(this.state.people)} character="Goofy" />
        <p>Number of peoples : {this.state.count}</p>
        <MyForm AddPeople={this.AddPeople} />
        <Clock date={new Date()} />
        <FilterableProductTable products={PRODUCTS} />
      </div>
    );
  }
}

function randomPerson(arr) {
  const person = arr[Math.floor(Math.random() * arr.length)];
  return person;
}

export default App;
const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
