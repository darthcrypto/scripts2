import React, { Component } from 'react';

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      time: (new Date()).toLocaleTimeString(),
      x: 100,
      j: 200
    };   
  }

componentDidMount() {
  setInterval(() => {
  const currentTime = (new Date()).toLocaleString();
  
  this.setState({ time: currentTime});

  },1000);
  
  console.log("cdm")
}

  render() {
    return (<h1>{this.state.time}</h1>);
 }
}

export default App;