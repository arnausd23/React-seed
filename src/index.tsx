import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/fonts.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {store} from "./store";

import i18n from 'i18next';
import {initReactI18next} from "react-i18next";

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
            <App/>
        </Provider>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
