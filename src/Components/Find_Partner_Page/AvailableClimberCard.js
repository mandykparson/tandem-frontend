import React from 'react'
import AvailableClimbersOutput from './AvailableClimbersOutput'
import { useState } from 'react'

export default function AvailableClimberCard({ climber }) {

    const [count, setCount] = useState([0])

    const renderClimberGear = () => {
        let arraylength = climber.gears.length
        return climber.gears.map(gear => {
            return `${gear.name}, `
        })
    }
    return (
        <div className="available-climber-card">
            <img src={climber.image}></img>
            <div>
                <h2>{climber.name}</h2>
                <h3>My Gear:</h3>
                <p>{ renderClimberGear() }</p>
                <button className="gear-button">Send Message</button>
            </div>
        </div>
    )
}
