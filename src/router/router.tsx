import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {LoginContainer, PlayerContainer} from "../containers";
import {PrivateRoute} from "./PrivateRoute";


function AppRouter() {
    return (
        <Router>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/redux/">Redux</Link>
                        </li>
                        <li>
                            <Link to="/login/">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/login" component={LoginContainer}/>
                <PrivateRoute path="/redux" component={PlayerContainer}/>
            </>
        </Router>
    );
}

export default AppRouter;