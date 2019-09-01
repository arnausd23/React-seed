import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import {playerReducer} from './reducers/reducer';
import rootSaga from "./sagas/saga";

const mergedReducers = combineReducers({
    player: playerReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    mergedReducers,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ),
);

sagaMiddleware.run(rootSaga);