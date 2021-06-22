import React, { Component } from 'react'
import MainDiv from "./Components/MainDiv"
import Footer from "./Components/Footer"
import './App.css';

export default class App extends Component {
  state = {
    climbers: [],
    areas: [],
    gears: []
  }
  render() {
    return (
      <div className="app">
        <h1>App Div</h1>
        <MainDiv />
        <Footer/>
      </div>
    )
  }
}

