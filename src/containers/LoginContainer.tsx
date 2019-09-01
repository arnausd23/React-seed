import React from 'react';
import {LoginComponent} from "../components/LoginComponent";
import useSignUpForm from "../services/FromHook";

export interface ILoginFormData {
    userName: string;
    password: string;
}

export default LoginContainer => {
    const onSignup = (inputs) => {
        console.log(`User Created!
         UserName: ${inputs.userName}
         Password: ${inputs.password}`);
    };

    const initialFormState: ILoginFormData = {
        userName: '',
        password: ''
    };

    return <LoginComponent {...useSignUpForm(initialFormState, onSignup)}/>;
};
