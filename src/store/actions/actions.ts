import {Player} from "../../models/Player";

export const ADD_PLAYER = 'ADD_PLAYER';

export function addPlayer(player: Player) {
    return {type: ADD_PLAYER, player}
}