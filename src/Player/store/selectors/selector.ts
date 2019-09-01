import {createSelector} from 'reselect'

import {IInitialState} from "../reducers/reducer";

export const reducerState = state => state.player;

export const getPlayers = createSelector(
    reducerState,
    (state: IInitialState) => state.players,
);