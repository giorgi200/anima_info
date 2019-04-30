import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from '../components/main';
import Other from '../components/other';
import Header from '../components/partials/header';
import Figures from '../components/partials/figures';
function AppRouter() {
    return (
        <Router>
            <Header />
            <Figures />
            <main>
                <Route path="/" exact component={Main} />
                <Route path="/other" component={Other} />
            </main>
        </Router>
    );
}

export default AppRouter;
