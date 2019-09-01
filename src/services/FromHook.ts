import {useState} from 'react';

const useSignUpForm = (initialState = {}, callback) => {
    const [inputs, setInputs] = useState(initialState);

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback(inputs);
    };


    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
};

export default useSignUpForm;