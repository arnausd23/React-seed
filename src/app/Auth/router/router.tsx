import React from "react";
import {Route, Router} from "react-router-dom";
import {LoginContainer} from "../containers/index";


function AuthRouter() {
    return (
        <Router>
            <Route path="/login" component={LoginContainer}/>
        </Router>
    );
}

export default AuthRouter;