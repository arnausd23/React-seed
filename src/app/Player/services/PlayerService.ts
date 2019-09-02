import {useState, useEffect} from "react";

import {IPlayer, Player} from "../models/Player";
import {AxiosHttpService} from "../../_shared/services/AxiosHttpService";

import {addPlayer} from "../store/actions/actions";

export function useCreatePlayer(data: IPlayer) {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        // logic to store in DB
        const player: Player = Player.fromJSON(data);
        addPlayer(player);
        return setPlayer(player)
    }, [data]);
    return player;
}

export function useGetPlayer() {
    const [player, getPlayer] = useState<Player | null>(null);

    useEffect(() => {
        AxiosHttpService.get('/player').then(player => getPlayer(player));
    }, [true]);
    return player
}
