import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../components/main';
import Contact from '../components/contact';

import Header from '../components/partials/header';
import BotsGallery from '../components/bots';

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
                <Route path="/contact" exact component={figuresAuth} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/bots" exact component={figuresBots} />                
                <Route path="/bots" exact component={BotsGallery} />
            </main>
        </Router>
    );
}

export default AppRouter;
