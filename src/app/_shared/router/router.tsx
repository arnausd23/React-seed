import React from "react";
import {BrowserRouter} from "react-router-dom";

import AuthRouter from "../../Auth/router/router";
import PlayerRouter from "../../Player/router/router";

export enum Routes {
    Login = '/login',
    Players = '/redux',
}

function AppRouter() {
    return (
        <BrowserRouter>
            <AuthRouter/>
            <PlayerRouter/>
        </BrowserRouter>
    );
}

export default AppRouter;