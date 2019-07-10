import React from 'react';
import {IPlayer, Player} from "./models/Player";
import {ITournament, Tournament} from "./models/Tournament";
import {IMatch, Match} from "./models/Match";

const App: React.FC = () => {
    const player1: IPlayer = Player.fromJSON({
        id: '1',
        userName: 'arnau',
        email: 'arnau@gmail.com',
    });

    const player2: IPlayer = Player.fromJSON({
        id: '2',
        userName: 'roman',
        email: 'roman@gmail.com',
    });

    const tournament: ITournament = Tournament.fromJSON({
        id: '1',
        name: 'First Tournament',
        date: JSON.stringify(Date()),
        numberOfPhases: 1,
    });

    const match: IMatch = Match.fromJSON({
        id: '1',
        playersId: [player1.id, player2.id],
        tournamentId: tournament.id,
        phaseNumber: 1,
    });

    return (
        <div>
            { Object.keys(player1).map((key: string) => <div key={key}>{key} : { player1[key] }</div>) }
        </div>
    );
};

export default App;
