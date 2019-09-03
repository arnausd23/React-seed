import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import AuthRouter from "../../Auth/router/router";
import PlayerRouter from "../../Player/router/router";

const Home = () => <h1>Home</h1>;

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