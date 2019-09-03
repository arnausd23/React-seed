import React from "react";
import {PlayerContainer} from "../containers/index";
import {PrivateRoute} from "../../_shared/router/PrivateRoute";
import {Routes} from "../../_shared/router/router";

function PlayerRouter() {
    return (
        <>
            <PrivateRoute path={Routes.Players} component={PlayerContainer}/>
        </>
    );
}

export default PlayerRouter;