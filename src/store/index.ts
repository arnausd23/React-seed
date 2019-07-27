import {combineReducers, createStore} from 'redux'

import {playerReducer} from './reducers/reducer';

const mergedReducers = combineReducers({
    player: playerReducer,
});

export const store = createStore(mergedReducers);