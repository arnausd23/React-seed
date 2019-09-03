import React from "react";
import {PlayerContainer} from "../containers/index";
import {Route, BrowserRouter} from "react-router-dom";
import {PrivateRoute} from "../../_shared/router/PrivateRoute";

function PlayerRouter() {
    return (
        <BrowserRouter>
            <PrivateRoute path="/redux" component={PlayerContainer}/>
        </BrowserRouter>
    );
}

export default PlayerRouter;