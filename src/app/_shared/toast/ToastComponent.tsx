import React from "react";

import "./ToastComponentStyles.scss";

export const ToastComponent = (props) => {
    return (
        <div className='customToast__body-container'>
            <div className='customToast__ribbon'>FFFF</div>
            <div className='customToast__text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur cupiditate labore necessitatibus nemo nisi non!</p>
            </div>
        </div>
    );
};