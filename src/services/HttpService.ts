const BASE_URL: string = 'http://localhost:8183';

export class HttpService {

    static get(url: string): any {
        fetch(`${BASE_URL}${url}`)
            .then(response => response.json())
    }

    static post(url: string, body: any): any {

    }
}