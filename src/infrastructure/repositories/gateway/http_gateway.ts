const axios = require('axios');

export interface HttpGateway {
    get(url: string): any;
    post(url: string, body: any): any;
}

const BASE_URL: string = 'http://localhost:8183';

export class HttpAxiosRepository implements HttpGateway {
    private static instance: HttpAxiosRepository;

    static getInstance(): HttpAxiosRepository {
        if (!HttpAxiosRepository.instance) {
            HttpAxiosRepository.instance = new HttpAxiosRepository();
        }

        return HttpAxiosRepository.instance;
    }

    public get(url: string): any {
        console.log(axios.get(`${BASE_URL}${url}`).then(response => response))
        return axios.get(`${BASE_URL}${url}`).then(response => response);
    }

    public post(url: string, body: any): any {
    }
}