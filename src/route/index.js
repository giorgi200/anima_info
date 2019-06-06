import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../components/main';
import Contact from '../components/contact';

import Header from '../components/partials/header';
import figuresAuth from '../components/partials/figuresAuth'
// import figuresBots from '../components/partials/figuresBots'
import figuresMain from '../components/partials/figuresMain'


function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" exact component={figuresMain} />                
                <Route path="/" exact component={Main} />
                <Route path="/contact" component={figuresAuth} />
                <Route path="/contact" component={Contact} />
            </main>
        </Router>
    );
}

export default AppRouter;
