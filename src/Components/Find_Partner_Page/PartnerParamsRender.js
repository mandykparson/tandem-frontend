import React from 'react'

export default function PartnerParamsRender({selectedArea}) {

    const renderAreaCard = () => {
        return (
            <div className="render-area-card">
                <img src={selectedArea.image}></img>
                <h3>{selectedArea.name}</h3>
                <p>{selectedArea.location}</p>
                <p>{selectedArea.description}</p>
                <a href={selectedArea.link}>Check it out on Mountain Project</a>
            </div>
        )
    }
    return (
        <div className="partner-params-sub">
            <h2>Your Selected Area</h2>
            {renderAreaCard()}

        </div>
    )
}
