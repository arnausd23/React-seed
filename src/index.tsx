import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './app/_shared/styles/fonts.scss';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {store} from "./app/Player/store";

import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

import AppRouter from "./app/_shared/router/router";
import {Home} from "./app/_shared/components/Home";


i18n
    .use(initReactI18next)
    .init({
        debug: false,
        resources: {
            es: {
                translation: require('./translations/es.json')
            }
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

ReactDOM.render(
    <Suspense fallback="loading">
        <Provider store={store}>
            <Home>
                <AppRouter/>
            </Home>
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
