export interface IPlayer {
    id: string;
    userName: string;
    email: string;
    password?: string;
}

export class Player implements IPlayer {
    public readonly id: string;
    public readonly userName: string;
    public readonly email: string;
    public readonly password?: string;

    private constructor(
        id: string,
        userName: string,
        email: string,
        password?: string
    ) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    public static fromJSON(json: IPlayer): Player {
        return new Player(
            json.id,
            json.userName,
            json.email,
            json.password,
        );
    }

    public toJSON(): IPlayer {
        return JSON.parse(JSON.stringify({
            id: this.id,
            userName: this.userName,
            email: this.email,
            password: this.password,
        }));
    }
}