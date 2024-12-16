import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    private _localStorage = localStorage;

    setItem(key: string, value: string | number | Object) {
        switch (typeof value) {
            case "number":
                value = String(value)
                break;
            case "object":
                value = JSON.stringify(value);

        }
        this._localStorage.setItem(key, value as string)
    }


}