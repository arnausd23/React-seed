import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import AuthRouter from "../../Auth/router/router";
import PlayerRouter from "../../Player/router/router";

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to="/">Login</Link>
    </div>
);

function AppRouter() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <AuthRouter/>
            <PlayerRouter />
        </Router>
    );
}

export default AppRouter;