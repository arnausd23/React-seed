const axios = require('axios');

export abstract class HttpGateway {
    static get: (url: string) => any;
}

const BASE_URL: string = 'http://localhost:8183';

export class AxiosHttpService implements HttpGateway {
    static get(url: string): Promise<any> {
        return axios.get(`${BASE_URL}${url}`).then(response => response.data);
    }

    static post(url: string, body: any): any {
    }
}