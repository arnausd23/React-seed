import {HttpGateway} from "../gateway/http_gateway";

export interface ILocalStorageRepository {
    getAll(): any[]
    create(info: any): any
}

export class LocalStorageRepository implements ILocalStorageRepository {
    private static instance: LocalStorageRepository;

    static getInstance(): LocalStorageRepository {
        if (!LocalStorageRepository.instance) {
            LocalStorageRepository.instance = new LocalStorageRepository();
        }

        return LocalStorageRepository.instance;
    }

    public getAll(): any {
        return {};
    }

    public create(info: any): any {
        return info;
    }
}