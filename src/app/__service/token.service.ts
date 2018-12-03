import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class TokenService {
    token = new EventEmitter();

    getToken() {
        if (Object.keys(this.token)[0] == "token") {
            return this.token['token']
        }
    }

    setToken(token) {
        this.token = token;
    }
}