import React from 'react'

export default function UserGear(props) {

    const renderGearButtons = () => {
        return props.userGear.map(gear => {
            return <button onClick={handleClick}className="gear-button">{gear}</button>
        })
    }

    const handleClick = (e) => {
        props.removeUserGear(e.target.innerText)
    }
    return (
        <div className="my-gear-sub">
            <h2>User Gear</h2>
            {renderGearButtons()}
        </div>
    )
}
