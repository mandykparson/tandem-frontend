import React from 'react'
import AvailableClimberCard from "./AvailableClimberCard"


export default function AvailableClimbersOutput(props) {

    const renderClimberCards = () => {
        return props.availableClimbers.map(climber => {
            return <AvailableClimberCard key={climber.id} climber={climber}/>
        })
    }
    return (
        <div className="available-climbers-output">
            <div className="available-climbers-output-heading">
                <h2>Potential Climbing Partners</h2>
            </div>
            <div className="climber-card-output-container">
                { renderClimberCards() }
            </div>
        </div>
    )
}
