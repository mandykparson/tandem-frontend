import React, { Component } from 'react'
import MainDiv from "./Components/MainDiv"
import Footer from "./Components/Footer"
import './App.css';

export default class App extends Component {
  state = {
    climbers: [],
    areas: [],
    gears: [],
    userGear: [],
    selectedArea: "",
    availableClimbers: []
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

  updateSelectedArea = (areaSelected) => {
    this.setState({
      selectedArea: areaSelected
    })
  }

  updateAvailableClimbers = (areaSelected) => {
    const areaGear = areaSelected.gears.map(gear => {
      return gear.name})
    const userGear = this.state.userGear
    //This is gear that the user needs a partner to have
    const gearNeededbyAvailableClimber = areaGear.filter((gear) => !userGear.includes(gear));
    const climbers = this.state.climbers
  


    const climbersWithGearNeeded = climbers.filter(climber => {
      const climberGear = climber.gears.map(gear => {
        return gear.name})
      const gearNeededbyUser = areaGear.filter((gear) => !climberGear.includes(gear))
      if (gearNeededbyUser.length === 0) {
        return climber
      } 
    })
    this.setState({
      availableClimbers: [...climbersWithGearNeeded]
    })
  }
    
  render() {
    console.log(this.state.availableClimbers)
    return (
      <div className="app">
        <h1>App Div</h1>
        <MainDiv 
          climbers={this.state.climbers} 
          areas={this.state.areas}
          gears={this.state.gears}
          userGear={this.state.userGear}
          addUserGear={this.addUserGear}
          removeUserGear={this.removeUserGear}
          updateSelectedArea={this.updateSelectedArea}
          selectedArea={this.state.selectedArea}
          updateAvailableClimbers={this.updateAvailableClimbers}
          />
        {/* <Footer/> */}
      </div>
    )
  }
}

