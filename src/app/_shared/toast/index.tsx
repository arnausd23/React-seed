import React from "react";

import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {ToastComponent} from "./ToastComponent";

export type toastTypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export class CustomToast extends React.Component {

   static openToast(type: toastTypeOptions, component?: React.Component) {
        toast.configure({
            hideProgressBar: true,
        });
        toast(<ToastComponent/>, { type, closeButton: false, className: 'customToast', bodyClassName: 'customToast__body'});
    }

    render() {
        return (
            <></>
        )
    }
}