import React from 'react'
import UserGear from './UserGear'
import AvailableGear from './AvailableGear'

export default function MyGear() {
    return (
        <div className="my-gear">
            <AvailableGear />
            <UserGear />
        </div>
    )
}
