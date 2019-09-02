export interface ITournament {
    id: string;
    name: string;
    date: string;
    numberOfPhases: number;
}

export class Tournament implements ITournament {
    public readonly id: string;
    public readonly name: string;
    public readonly date: string;
    public readonly numberOfPhases: number;

    private constructor(
        id: string,
        name: string,
        date: string,
        numberOfPhases: number
    ) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.numberOfPhases = numberOfPhases;
    }

    public static fromJSON(json: ITournament): Tournament {
        return new Tournament(
            json.id,
            json.name,
            json.date,
            json.numberOfPhases,
        );
    }

    public toJSON(): ITournament {
        return JSON.parse(JSON.stringify({
            id: this.id,
            name: this.name,
            date: this.date,
            numberOfPhases: this.numberOfPhases,
        }));
    }
}