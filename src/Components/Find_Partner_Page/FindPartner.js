import React from 'react'
import PartnerParams from "./PartnerParams"
import AvailableClimbersOutput from "./AvailableClimbersOutput"

export default function FindPartner(props) {
    return (
        <div className="find-partner">
            <div className="page-wrap">
                <PartnerParams 
                    selectedArea={props.selectedArea}
                    updateSelectedArea={props.updateSelectedArea}
                    userGear={props.userGear}
                    areas={props.areas}
                    updateAvailableClimbers={props.updateAvailableClimbers}/>
                <AvailableClimbersOutput 
                    climbers={props.climbers}
                    selectedArea={props.selectedArea}
                    userGear={props.userGear}
                    availableClimbers={props.availableClimbers}/>
            </div>
        </div>
    )
}
