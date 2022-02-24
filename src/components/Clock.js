import React from "react";

export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date :new Date(),

    }
  }

  componentDidMount(){
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date:new Date()
    })
  }

  render(){
    const {date} = this.props;
    const [day, month, year] = [date.getDay(),date.getMonth(),date.getFullYear()]
    return(
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <p>Date: {day}/{month}/{year}</p>
      </div>
    )
  }
}
