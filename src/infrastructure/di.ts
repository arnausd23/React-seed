import {HttpAxiosRepository, HttpGateway} from "./repositories/gateway/http_gateway";
import {PlayerDBRepository} from "./repositories/local/player_local_repository";
import {PlayerHttpRepository} from "./repositories/gateway/player_http_gateway";
import {PlayerService} from "../services/playerService2";
import {LocalStorageRepository} from "./repositories/local/local_repository";

export class DI {
    playerService: PlayerService;

    private static instance: DI;

    static getInstance(): DI {
        if (!DI.instance) {
            var httpRepository = HttpAxiosRepository.getInstance();
            var localRepository = LocalStorageRepository.getInstance();
            var playerDBRepository = PlayerDBRepository.getInstance(localRepository);
            var playerHttpRepository = PlayerHttpRepository.getInstance(httpRepository);
            var playerService = PlayerService.getInstance(playerDBRepository, playerHttpRepository);

            DI.instance = new DI(playerService);
        }

        return DI.instance;
    }

    constructor(playerService: PlayerService){
        this.playerService = playerService;
    }
}