import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

import AuthRouter from "../../Auth/router/router";
import PlayerRouter from "../../Player/router/router";

export enum Routes {
    Login = '/login',
    Players = '/redux',
}

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link to={Routes.Login}>Login</Link>
        <br/>
        <Link to={Routes.Players}>Players</Link>
    </div>
);

function AppRouter() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <AuthRouter/>
            <PlayerRouter/>
        </BrowserRouter>
    );
}

export default AppRouter;