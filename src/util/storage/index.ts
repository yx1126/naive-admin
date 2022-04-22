export interface StorageApi {
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
    removeItem: (key: string) => void;
}
export type SessionWay = "session" | "location";

class StorageProxy implements StorageApi {
    protected storage: StorageApi;

    constructor(storageType: StorageApi) {
        this.storage = storageType;
    }

    public getItem(key: string) {
        return JSON.parse(this.storage.getItem(key));
    }

    public setItem(key: string, value: any) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    public removeItem(key: string) {
        this.storage.removeItem(key);
    }
}

export const session = new StorageProxy(sessionStorage);
export const location = new StorageProxy(localStorage);
