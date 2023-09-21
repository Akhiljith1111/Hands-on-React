
import React from 'react';


export default class Child extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    console.log("constructor - Child");
  }

  componentDidMount() {
    console.log("componentDisMount - Child")
  }
  render() {
    console.log("render - Child")
    return (
      <div>
      <h1>Life Cycle Methods Child</h1>
      </div>
    )
  }
}