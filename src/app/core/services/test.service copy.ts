import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OldTestService {
    myValue = 600;
    constructor() {
        console.log(this.myValue);
    }

    inc() {
        this.myValue += 1;
    }

}
