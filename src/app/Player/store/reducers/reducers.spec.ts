import {Player} from "../../models/Player";
import {IInitialState} from "./reducer";

import * as fromActions from '../actions/actions';
import * as fromReducer from './reducer';

describe('Reducer tests' , () => {
    it('[ADD_PLAYER] should add a player to the players array', () => {
        const player: Player = Player.fromJSON({
            id: '1',
            userName: 'arnau',
            email: 'arnausd23@hotmail.com',
            password: '123',
        });

        const initialState: IInitialState = {
            players: [],
        };

        const action = fromActions.addPlayer(player);
        const state = fromReducer.playerReducer(initialState, action);

        expect(state.players).toEqual([player]);
    });
});
