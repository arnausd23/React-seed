import {ILoginFormData} from "../containers/LoginContainer";
import {AxiosHttpService, HttpGateway} from "../../_shared/services/AxiosHttpService";
import {StorageService} from "../../_shared/services/StorageService";

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