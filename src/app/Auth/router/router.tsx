import React from "react";
import {Route} from "react-router-dom";
import {LoginContainer} from "../containers/index";


function AuthRouter() {
    return (
        <>
            <Route path="/login" component={LoginContainer}/>
        </>
    );
}

export default AuthRouter;