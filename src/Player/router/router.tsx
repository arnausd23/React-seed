import React from "react";
import {PlayerContainer} from "../containers/index";
import {PrivateRoute} from "../../_shared/router/PrivateRoute";


function PlayerRouter() {
    return (
        <>
            <PrivateRoute path="/redux" component={PlayerContainer}/>
        </>
    );
}

export default PlayerRouter;