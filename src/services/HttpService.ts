export interface IHttp {
    get(url: string): any;
    post(url: string, body: any): any;
}

const BASE_URL: string = 'http://localhost:8183';

export class HttpService implements IHttp {
    public get(url: string): any {
    }

    public post(url: string, body: any): any {
    }
}