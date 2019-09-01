import React from 'react';
import {LoginComponent} from "../components/LoginComponent";

export interface ILoginFormData {
    userName: string;
    password: string;
}

export default LoginContainer => {
    function handleFormSubmit(data: ILoginFormData) {
        console.log(data);
    }

    return <LoginComponent onSubmit={handleFormSubmit}/>;

};
