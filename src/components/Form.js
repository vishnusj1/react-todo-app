import React from "react";
import './Form.css'

export default class MyForm extends React.Component{
render(){
  return(

    <form action="">
    <label htmlFor="name">Name</label>
      <input type="text" name="name"/>
      <button onClick ={this.props.AddPeople}>Add</button>
    </form>

  )
}
}