import React from 'react';

export const LoginComponent = ({onSubmit}) => {

    return (
        <form onClick={() => onSubmit({userName: 'arnau', password: '123'})}>
            <div>
                <label htmlFor="userName">User Name: </label>
                <input type="text" required/>
            </div>
            <div>
                <label htmlFor="password">User Password: </label>
                <input type="password" required/>
            </div>
            <button type={"button"}>Submit</button>
        </form>
    );
};