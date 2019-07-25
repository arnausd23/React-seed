import {Player} from "../../../models/Player";
import {LocalStorageRepository} from "./local_repository";

export class PlayerDBRepository {
    client: LocalStorageRepository;

    private static instance: PlayerDBRepository;

    static getInstance(client: LocalStorageRepository): PlayerDBRepository {
        if (!PlayerDBRepository.instance) {
            PlayerDBRepository.instance = new PlayerDBRepository(client);
        }

        return PlayerDBRepository.instance;
    }


    constructor(client: LocalStorageRepository) {
        this.client = client
    }
    getAll(){
        this.client.getAll();
    }
    create(player: Player){
        this.client.create({});
    }
}