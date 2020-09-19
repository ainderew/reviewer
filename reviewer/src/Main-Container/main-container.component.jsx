import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import HomePage from "../Pages/home-page/home-page.component"

const MainContainer = () =>{
    return(
        <Router>
            <div className="wrapper">
                <Switch>
                    <Route to="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}

export default MainContainer;