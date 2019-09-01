const axios = require('axios');

export abstract class HttpGateway {
    static get: (url: string) => any;
    abstract post(url: string, data: any): any;
}

const BASE_URL: string = 'http://localhost:8183';

export class AxiosHttpService implements HttpGateway {
    static get(url: string) {
        return axios.get(`${BASE_URL}${url}`).then(response => response.data);
    }

     post(url: string, data: any) {
        return axios.post(`${BASE_URL}${url}`, data).then(response => response.data);
    }
}