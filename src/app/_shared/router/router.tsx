import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import AuthRouter from "../../Auth/router/router";
import PlayerRouter from "../../Player/router/router";

function AppRouter() {
    return (
        <Router>
            <AuthRouter/>
            <PlayerRouter />
        </Router>
    );
}

export default AppRouter;