import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigpen from './Pigpen'

class App extends Component {

  state = {
    pigs: hogs
  }
  render() { 
    return (
      <div className="App">
          < Nav />
          <Pigpen pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
