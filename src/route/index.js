import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../components/main';
import Login from '../components/login'
import Registration from '../components/registration';
import BotsGallery from '../components/bots'

// import Other from '../components/other';
import Header from '../components/partials/header';
import figuresAuth from '../components/partials/figuresAuth'
import figuresBots from '../components/partials/figuresBots'
import figuresMain from '../components/partials/figuresMain'


function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" exact component={figuresMain} />                
                <Route path="/" exact component={Main} />
                <Route path="/login" component={figuresAuth} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={figuresAuth} />
                <Route path="/registration" component={Registration} />
                <Route path="/bots" component={figuresBots} />                
                <Route path="/bots" component={BotsGallery} />
            </main>
        </Router>
    );
}

export default AppRouter;
