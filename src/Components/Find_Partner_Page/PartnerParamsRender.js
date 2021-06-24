import React from 'react'

export default function PartnerParamsRender({selectedArea}) {

    const renderAreaCard = () => {
        if (selectedArea === "default") {
            return (
                <div className="render-area-card">
                    <img src="https://docs.google.com/drawings/d/e/2PACX-1vRS_NhV6RhRyoKsx7K0Q9Y_ySAuzau06Ao3_QwEUbyWp2KHqVNrKLjiA_asaEfQW4aN5fpjQD15Qhe0/pub?w=250&amp;h=250"></img>
                </div>)
        } else {
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
    }
    return (
        <div className="partner-params-sub" id="sub-two">
            <h2>Your Selected Area</h2>
            {renderAreaCard()}

        </div>
    )
}
