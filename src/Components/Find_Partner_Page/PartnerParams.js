import React from 'react'
import PartnerParamsForm from "./PartnerParamsForm"
import PartnerParamsRender from "./PartnerParamsRender"

export default function PartnerParams(props) {
    return (
        <div className="partner-params">
            <PartnerParamsForm
                selectedArea={props.selectedArea}
                updateSelectedArea={props.updateSelectedArea}
                userGear={props.userGear} 
                areas={props.areas}
                updateAvailableClimbers={props.updateAvailableClimbers}/>
            <PartnerParamsRender 
                selectedArea={props.selectedArea}/>


        </div>
    )
}
