import React from 'react';
import {LoginComponent} from "../components/LoginComponent";
import {AuthenticationService} from "../services/AuthenticationService";
import useSignUpForm from "../../_shared/services/FormHook";

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
