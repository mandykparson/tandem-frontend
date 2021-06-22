import React from 'react'
import {
    BrowserRouter as Router, 
    Route,
    Link,
    Switch
} from 'react-router-dom'
import HomePage from "./HomePage"
import MyGear from "./My_Gear_Page/MyGear"
import FindPartner from "./Find_Partner_Page/FindPartner"

export default function MainDiv() {
    return (
        <div className="main-div">
            <Router>
            <div className="header">
                <h1>Tandem</h1>
                    <nav className="nav-bar">
                        <Link to="/">HOME </Link>| 
                        <Link to="/mygear"> My Gear </Link>| 
                        <Link to="/findpartner">Find Partner</Link>
                    </nav>
            </div>
            <div className="main-content">
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/mygear">
                        <MyGear />
                    </Route>
                    <Route exact path="/findpartner">
                        <FindPartner />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
    )
}
