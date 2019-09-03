import React from "react";
import {PlayerContainer} from "../containers/index";
import {Route, Router} from "react-router-dom";
import {PrivateRoute} from "../../_shared/router/PrivateRoute";

function PlayerRouter() {
    return (
        <Router>
            <PrivateRoute path="/redux" component={PlayerContainer}/>
        </Router>
    );
}

export default PlayerRouter;