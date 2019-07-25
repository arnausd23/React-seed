import {LocalStorageRepository} from "../infrastructure/repositories/local/local_repository";
import {PlayerDBRepository} from "../infrastructure/repositories/local/player_local_repository";
import {PlayerHttpRepository} from "../infrastructure/repositories/gateway/player_http_gateway";
import {HttpAxiosRepository} from "../infrastructure/repositories/gateway/http_gateway";
import {PlayerRepository} from "../infrastructure/domain/player_repository";
import {Player} from "../models/Player";

export class PlayerService implements PlayerRepository {
    localRepository: LocalStorageRepository;
    httpRepository: HttpAxiosRepository;

    constructor(localRepository, httpRepository) {
        this.localRepository = localRepository;
        this.httpRepository = httpRepository;
    }

    private static instance: PlayerService;

    static getInstance(dbRepo, httpRepo): PlayerService {
        if (!PlayerService.instance) {
            PlayerService.instance = new PlayerService(PlayerDBRepository.getInstance(), PlayerHttpRepository.getInstance( HttpAxiosRepository.getInstance()));
        }

        return PlayerService.instance;
    }

    public getAll(): any {
        var players = this.localRepository.getAll();
        if (players.length) return players;
        else {
            var playersResult = this.httpRepository.get('players');
            this.localRepository.create(players);
            return playersResult;
        }
    }

    public create(player: Player): any {
    }
}