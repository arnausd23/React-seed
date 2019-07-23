import React from 'react';

import { useCreatePlayer } from "./services/PlayerService";
import { useCreateMatch } from "./services/MatchService";
import { useCreateTournament } from "./services/TournamentService";


const App: React.FC = () => {
    const player1 = useCreatePlayer(player1Data);
    const player2 = useCreatePlayer(player2Data);
    const tournament = useCreateTournament(tournamentData);
    const match = useCreateMatch(matchData);


    return (
        <div>
            <h1>TOURNAMENT: { tournament && tournament.name }</h1>
            <h2>PHASE: { match && match.phaseNumber }</h2>
            { player1 && Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
            { player2 && Object.keys(player2).map((key: string) => <div key={key}>{key} : { player2[key] }</div>) }
        </div>
    );
};

export default App;
