export interface IStorageService {
    set(key: string, value: string);
    get(key: string): string | null;
    remove(key: string);
}

export const StorageService: IStorageService = {
    set,
    get,
    remove
};

function set(key: string, value: string) {
    localStorage.setItem(key, value);
}

function get(key: string): string | null {
    return localStorage.getItem(key);
}

function remove(key: string): void {
    localStorage.removeItem(key);
}

