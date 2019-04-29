import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from '../components/main';
import Other from '../components/other';
import Header from '../components/partials/header';

function AppRouter() {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" exact component={Main} />
                <Route path="/other" component={Other} />
            </main>
        </Router>
    );
}

export default AppRouter;
