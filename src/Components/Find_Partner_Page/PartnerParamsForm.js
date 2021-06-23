import React from 'react'

export default function PartnerParamsForm(props) {

    const renderUserGear = () => {
        return props.userGear.map(gear => {
            return <p>{gear}</p>
        })
    }
    const renderAreaGear = () => {
        if (props.selectedArea.length === 0) {
            return "No Area Selected"
        } else {
        return props.selectedArea.gears.map(gear => {
            return <p>{gear.name}</p>
            })
        }
    }

    const createDropdownAreaOptions = () => {
        return props.areas.map(area => {
            return <p 
                    key={area.id}
                    onClick={() => handleClick(area) }>{area.name}</p>
        })
    }

    const handleClick = (e) => {
        props.updateSelectedArea(e)
        props.updateAvailableClimbers(e)
    }

    return (
        <div className="partner-params-sub">
            <h2>Select an Area</h2>
            <div className="dropdown">
                <button class="dropbtn">Areas</button>
                    <div onChange={ handleClick }class="dropdown-content">
                        { createDropdownAreaOptions() }
                </div>
            </div>
            <div className="sub-headings">
                <h2>Your Gear</h2>
                {renderUserGear()}
                <h2>Required Area Gear</h2>
                {renderAreaGear()}
                
            </div>
            
        </div>
    )
}
