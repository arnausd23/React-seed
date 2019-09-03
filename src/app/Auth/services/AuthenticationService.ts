import {ILoginFormData} from "../containers";
import {AxiosHttpService} from "../../_shared/services/AxiosHttpService";
import {StorageService} from "../../_shared/services/StorageService";

interface ILoginResponse {
    token: string;
}

export const AuthenticationService = {
    login
};

function login(loginFormData: ILoginFormData): boolean {
    AxiosHttpService
        .post(`/login`, loginFormData)
        .then((response: ILoginResponse) => {
            StorageService.set('user', response.token);
        });
    return true;
}