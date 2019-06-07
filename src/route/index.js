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
                <Route path="/" exact strict component={figuresMain} />                
                <Route path="/" exact strict component={Main} />
                <Route path="/contact" strict component={figuresAuth} />
                <Route path="/contact" strict component={Contact} />
            </main>
        </Router>
    );
}

export default AppRouter;
