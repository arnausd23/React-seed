import { useState, useEffect } from "react";

import {IPlayer, Player} from "../models/Player";

export function useCreatePlayer(data: IPlayer) {
    const [player, setPlayer] = useState<Player | null>(null);

    useEffect(() => {
        // logic to store player in DB
        const player: Player = Player.fromJSON(data);
        return setPlayer(player)
    }, [data]);
    return player;
}