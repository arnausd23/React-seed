import {ADD_PLAYER} from "../actions/actions";
import {Player} from "../../models/Player";

interface IInitialState {
    players: Player[];
}

const initialState: IInitialState = {
    players: [],
};

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players,
                    action.player,
                ]
            };
        default:
            return state
    }
}