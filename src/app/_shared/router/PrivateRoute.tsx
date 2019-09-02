import React from "react";
import {Redirect, Route} from "react-router-dom";
import {StorageService} from "../services/StorageService";

export const PrivateRoute = ({component, ...rest}) => {
    const PropsComponent = component;
    return (
        <Route {...rest} render={(props) => (
            !!StorageService.get('user')
                ? <PropsComponent {...props} />
                : <Redirect to='/login'/>
        )}/>
    );
};