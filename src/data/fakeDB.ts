import {IPlayer} from "../models/Player";
import {ITournament} from "../models/Tournament";
import {IMatch} from "../models/Match";

export const player1Data: IPlayer = {
    id: '1',
    userName: 'arnau',
    email: 'arnau@gmail.com',
};

export const player2Data: IPlayer = {
    id: '1',
    userName: 'arnau',
    email: 'arnau@gmail.com',
};

export const tournamentData: ITournament = {
    id: '1',
    name: 'First Tournament',
    date: JSON.stringify(Date()),
    numberOfPhases: 1,
};

export const matchData: IMatch = {
    id: '1',
    playersId: [
        player1Data ? player1Data.id : '',
        player2Data ? player2Data.id : '',
    ],
    tournamentId: tournamentData ? tournamentData.id : '',
    phaseNumber: 1,
};