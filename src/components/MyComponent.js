import React from 'react';
// import { ReactDOM } from "react-dom";
import './MyComponent.css';

export default class MyComponent extends React.Component {
  render(){
    return (
      <div className="header">
        <div className="title">Hello, {this.props.name}</div>
      </div>
    )
  }
}
