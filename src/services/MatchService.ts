import { useState, useEffect } from "react";

import {IMatch, Match} from "../models/Match";

export function useCreateMatch(data: IMatch) {
    const [match, setMatch] = useState<Match | null>(null);

    useEffect(() => {
        // logic to store in DB
        const match: Match = Match.fromJSON(data);
        return setMatch(match)
    }, [data]);
    return match;
}