export interface IMatch {
    id: string;
    playersId: string[];
    tournamentId: string;
    phaseNumber: number;
}

export class Match implements IMatch {
    public readonly id: string;
    public readonly playersId: string[];
    public readonly tournamentId: string;
    public readonly phaseNumber: number;

    private constructor(
        id: string,
        playersId: string[],
        tournamentId: string,
        phaseNumber: number
    ) {
        this.id = id;
        this.playersId = playersId;
        this.tournamentId = tournamentId;
        this.phaseNumber = phaseNumber;
    }

    public static fromJSON(json: IMatch): Match {
        return new Match(
            json.id,
            json.playersId,
            json.tournamentId,
            json.phaseNumber,
        );
    }

    public toJSON(): IMatch {
        return JSON.parse(JSON.stringify({
            id: this.id,
            playersId: this.playersId,
            tournamentId: this.tournamentId,
            phaseNumber: this.phaseNumber,
        }));
    }
}