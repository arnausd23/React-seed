import React from "react";
import {Route} from "react-router-dom";
import {LoginContainer} from "../containers";
import {Routes} from "../../_shared/router/router";


function AuthRouter() {
    return (
        <>
            <Route path={Routes.Login} component={LoginContainer}/>
        </>
    );
}

export default AuthRouter;