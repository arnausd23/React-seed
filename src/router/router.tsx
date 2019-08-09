import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {PlayerContainer} from "../containers";


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
                    </ul>
                </nav>

                <Route path="/redux" exact component={PlayerContainer}/>
            </>
        </Router>
    );
}

export default AppRouter;