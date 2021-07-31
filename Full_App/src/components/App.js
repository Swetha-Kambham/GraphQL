import React from "react";
import {Route, Switch } from "react-router-dom";
import HomePage from "./Home/homepage";
import AboutPage from "./About/aboutpage";
import Header from "./comment/Header";
import pageNotFound from "./pageNotFound";
import Course from "./courses/course";
//import Sapi from "./Home/Sapi";
import DynamicUser from "./Home/DynamicUser";

function App()
{
    return(
        <div className="apppage">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/course" component={Course} />
               <Route path="/api" component={DynamicUser} />
                <Route component={pageNotFound}/>
            </Switch>
            
         </div>
    );        
}

export default App;
