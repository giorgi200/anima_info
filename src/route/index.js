import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from '../components/main';
import Login from '../components/login'
import Registration from '../components/registration';
import BotsGallery from '../components/bots'

import Other from '../components/other';
import Header from '../components/partials/header';
import Figures from '../components/partials/figures';
function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Figures />
                <Route path="/" exact component={Main} />
                <Route path="/other" component={Other} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/bots" component={BotsGallery} />
            </main>
        </Router>
    );
}

export default AppRouter;
