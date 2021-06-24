import React from 'react'

export default function AvailableGear(props) {

    const renderGearButtons = () => {
        return props.gears.map(gear => {
            return <button key={gear.id} className="gear-button" onClick={handleClick}>{gear.name}</button>
        })
    }
    const handleClick = (e) => {
        props.addUserGear(e.target.innerText)
    }

    return (
        <div className="my-gear-sub">
            <h2>Select Your Gear</h2>
            {renderGearButtons()}
        </div>
    )
}
