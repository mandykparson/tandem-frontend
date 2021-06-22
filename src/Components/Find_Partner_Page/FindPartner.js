import React from 'react'
import PartnerParams from "./PartnerParams"
import AvailableClimbersOutput from "./AvailableClimbersOutput"

export default function FindPartner() {
    return (
        <div className="find-partner">
            <h2>Find Partner</h2>
            <PartnerParams />
            <AvailableClimbersOutput />

        </div>
    )
}
