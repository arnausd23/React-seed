import React from 'react';
import {LoginComponent} from "../components/LoginComponent";
import useSignUpForm from "../services/FromHook";
import {AuthenticationService} from "../services/AuthenticationService";

export interface ILoginFormData {
    userName: string;
    password: string;
}

export const LoginContainer = () => {
    const onSignup = (inputs: ILoginFormData) => {
        AuthenticationService.login(inputs);
    };

    const initialFormState: ILoginFormData = {
        userName: '',
        password: ''
    };

    return <LoginComponent {...useSignUpForm(initialFormState, onSignup)}/>;
};
