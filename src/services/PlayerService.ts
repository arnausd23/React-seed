import {useState, useEffect} from "react";

import {IPlayer, Player} from "../models/Player";
import {AxiosHttpService} from "./AxiosHttpService";

export function useCreatePlayer(data: IPlayer) {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        // logic to store in DB
        const player: Player = Player.fromJSON(data);
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
