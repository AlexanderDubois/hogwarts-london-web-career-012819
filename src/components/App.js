import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigpen from './Pigpen'

const weightKey = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

class App extends Component {

  state = {
    pigs: hogs
  }

  sortByName = () => {
    this.setState({pigs: [...this.state.pigs].sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))})
  }

  sortByWeight = () => {
    this.setState({pigs: [...this.state.pigs].sort((a,b) => (a[weightKey] > b[weightKey]) ? 1 : ((b[weightKey] > a[weightKey]) ? -1 : 0)).reverse()})
  }

  filterByGreased = () => {
    this.setState({pigs: [...this.state.pigs].filter(pig => pig.greased)})
  }

  reset = () => {
    this.setState({pigs: hogs})
  }
  render() { 
    return (
      <div className="App">
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} filterByGreased={this.filterByGreased} reset={this.reset}/>

          <Pigpen pigs={this.state.pigs}/>
      </div>
    )
  }
}

export default App;
