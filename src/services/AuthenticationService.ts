import {StorageService} from "./StorageService";
import {AxiosHttpService, HttpGateway} from "./AxiosHttpService";

interface ILoginResponse {
    token: string;
}

export class AuthenticationService {
    private httpService: HttpGateway = new AxiosHttpService();

    public login(username: string, password: string): boolean {
        this.httpService
            .post(`/login`, {username, password})
            .then((response: ILoginResponse) => {
                StorageService.set('user', response.token);
            });
        return true;
    };
}