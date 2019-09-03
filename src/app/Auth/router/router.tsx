import React from "react";
import {Route, Router} from "react-router-dom";
import {LoginContainer} from "../containers/index";


function AuthRouter() {
    return (
        <>
            <Route path="/login" component={LoginContainer}/>
        </>
    );
}

export default AuthRouter;