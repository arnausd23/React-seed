import React from 'react';
import {ILoginFormData} from "../containers";

interface Props {
    inputs: ILoginFormData;
    handleSubmit: (event: any) => void;
    handleInputChange: (event: any) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const {inputs, handleInputChange, handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">User Name: </label>
                <input name="userName" type="text" onChange={handleInputChange} value={inputs.userName} required/>
            </div>
            <div>
                <label htmlFor="password">User Password: </label>
                <input name="password" type="password" onChange={handleInputChange} value={inputs.password} required/>
            </div>
            <button type={"submit"}>Submit</button>
        </form>
    );
};