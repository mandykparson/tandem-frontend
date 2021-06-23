import React from 'react'
import UserGear from './UserGear'
import AvailableGear from './AvailableGear'

export default function MyGear(props) {
    return (
        <div className="my-gear">
            <AvailableGear 
                gears={props.gears}
                addUserGear={props.addUserGear}
            />
            <UserGear 
                userGear={props.userGear} 
                removeUserGear={props.removeUserGear}
            />
        </div>
    )
}
