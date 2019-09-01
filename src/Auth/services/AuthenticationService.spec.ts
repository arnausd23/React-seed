
// @ts-ignore
import {AuthenticationService} from "./AuthenticationService";

describe('Authentication Service', () => {
    const service = new AuthenticationService;
    describe('Login user' , () => {
        it('Given a valid username and password it should save the token in local storage', () => {
            expect(service.login('arnau', '123')).toEqual(true);
        });
    });
});
