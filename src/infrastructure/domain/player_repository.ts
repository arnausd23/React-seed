import {Player} from "../../models/Player";

export interface PlayerRepository {
    getAll(): Player[];
    create(player: Player): any;
}