import React from "react";
import {Route, BrowserRouter} from "react-router-dom";
import {LoginContainer} from "../containers/index";


function AuthRouter() {
    return (
        <BrowserRouter>
            <Route path="/login" component={LoginContainer}/>
        </BrowserRouter>
    );
}

export default AuthRouter;