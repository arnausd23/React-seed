import React from "react";

import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {ToastComponent} from "./ToastComponent";

export type toastTypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export const CustomToast = {
  openToast,
};

function openToast(type: toastTypeOptions, title?: string, text?: string) {
    toast.configure({
        hideProgressBar: true,
    });
    toast(<ToastComponent title={title} text={text}/>, { type, closeButton: false, className: 'customToast', bodyClassName: 'customToast__body'});
}