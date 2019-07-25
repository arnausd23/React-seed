const axios = require('axios');

export interface IHttp {
    get(url: string): any;
    post(url: string, body: any): any;
}

const BASE_URL: string = 'http://localhost:8183';

export class HttpService implements IHttp {
    public get(url: string): any {
        console.log(axios.get(`${BASE_URL}${url}`).then(response => response))
        return axios.get(`${BASE_URL}${url}`).then(response => response);
    }

    public post(url: string, body: any): any {
    }
}