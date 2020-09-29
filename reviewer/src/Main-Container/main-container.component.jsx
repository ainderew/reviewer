import React from "react"
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//PAGES
import HomePage from "../Pages/home-page/home-page.component";
import StartStudyingPage from "../Pages/Start-Studying-page/start-studying-page.component";


//IMAGES
import PopUp_Back from "../Assets/Icons/PopUp_Back.svg"

const backFunction = () =>{
    window.history.back()
}


const MainContainer = () =>{
    return(
        <Router>
            <div className="wrapper">
                <img onClick={backFunction} src={PopUp_Back} alt="" className="back-btn"/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/StartStudying" exact component={StartStudyingPage} />
                </Switch>
            </div>
        </Router>
    )
}

export default MainContainer;