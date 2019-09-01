import {StorageService} from "./StorageService";
import {AxiosHttpService, HttpGateway} from "./AxiosHttpService";
import {ILoginFormData} from "../containers/LoginContainer";

interface ILoginResponse {
    token: string;
}

export const AuthenticationService = {
    login
};

const httpService: HttpGateway = new AxiosHttpService();

function login(loginFormData: ILoginFormData): boolean {
    httpService
        .post(`/login`, loginFormData)
        .then((response: ILoginResponse) => {
            StorageService.set('user', response.token);
        });
    return true;
}