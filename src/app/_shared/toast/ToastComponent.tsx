import React from "react";

import "./ToastComponentStyles.scss";

export const ToastComponent = (props) => {
    return (
        <div className='customToast__body-container'>
            <div className='customToast__ribbon'>{props.title ? props.title : 'Title'}</div>
            <div className='customToast__text'>
                <p>{props.text ? props.text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices purus sagittis erat porttitor, eu auctor massa tempus'}</p>
            </div>
        </div>
    );
};