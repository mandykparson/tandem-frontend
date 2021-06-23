import React, { Component } from 'react'
import MainDiv from "./Components/MainDiv"
import Footer from "./Components/Footer"
import './App.css';

export default class App extends Component {
  state = {
    climbers: [],
    areas: [],
    gears: [],
    userGear: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/climbers')
        .then(res => res.json())
        .then(apiClimbers => {
            this.setState({ 
                climbers: apiClimbers})
        })
    fetch('http://localhost:3000/areas')
        .then(res => res.json())
        .then(apiAreas => {
            this.setState({ 
                areas: apiAreas})
        })
    fetch('http://localhost:3000/gears')
        .then(res => res.json())
        .then(apiGears => {
            this.setState({ 
                gears: apiGears})
        })
  }

  addUserGear = (gearToAdd) => {
    const previousUserGear = this.state.userGear.filter(gear => {
      return gear !== gearToAdd
    })

    this.setState({
      userGear: [...previousUserGear, gearToAdd]
    })
  }

  removeUserGear = (gearToRemove) => {
    const updatedUserGear = this.state.userGear.filter(gear => {
      return gear !== gearToRemove
    })
    this.setState({
      userGear: [...updatedUserGear]
    })
  }

  render() {
    return (
      <div className="app">
        <h1>App Div</h1>
        <MainDiv 
          climbers={this.state.climbers} 
          areas={this.state.areas}
          gears={this.state.gears}
          userGear={this.state.userGear}
          addUserGear={this.addUserGear}
          removeUserGear={this.removeUserGear}/>
        <Footer/>
      </div>
    )
  }
}

