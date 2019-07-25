import {Player} from "../../../models/Player";
import {HttpAxiosRepository, HttpGateway} from "./http_gateway";

export class PlayerHttpRepository {
    client: HttpGateway;
    private static instance: PlayerHttpRepository;

    static getInstance(client: HttpAxiosRepository): PlayerHttpRepository {
        if (!PlayerHttpRepository.instance) {
            PlayerHttpRepository.instance = new PlayerHttpRepository(client);
        }

        return PlayerHttpRepository.instance;
    }


    constructor(client: HttpAxiosRepository) {
        this.client = client;
    }

    getAll(){
        this.client.get('/players')
    };
    create(player: Player){
        this.client.post('/players', {})
    };
}