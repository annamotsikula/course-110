import { Injectable } from "@angular/core";

@Injectable()
export class TestService {
    myValue = 100;
    constructor() {
        console.log(this.myValue);
    }

    inc() {
        this.myValue += 1;
    }

}
