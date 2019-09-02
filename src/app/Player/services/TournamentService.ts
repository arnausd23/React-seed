import { useState, useEffect } from "react";

import {ITournament, Tournament} from "../models/Tournament";

export function useCreateTournament(data: ITournament) {
    const [tournament, setTournament] = useState<Tournament | null>(null);

    useEffect(() => {
        // logic to store in DB
        const tournament: Tournament = Tournament.fromJSON(data);
        return setTournament(tournament)
    }, [data]);
    return tournament;
}