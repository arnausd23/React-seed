import { getPlayers } from './selector';
import {IInitialState} from "../reducers/reducer";
import {Player} from "../../models/Player";

describe('Test Selectors', () => {
    describe('getPlayers', () => {
        it('should return array of Player', () => {
            const player: Player = Player.fromJSON({
                id: '12S',
                userName: 'arnausd',
                email: 'arnausd@hotmail.com',
            });
            const mockState: IInitialState = {
                players: [player]
            };
            const players = getPlayers.resultFunc(mockState);

            expect(players).toEqual([player]);
        });
    });
});