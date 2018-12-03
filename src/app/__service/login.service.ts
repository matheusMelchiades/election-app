import { AppService } from './app.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {
    

    constructor(private http: AppService) {

    }

    post(body) {
        return this.http.post(environment.voter.loginUrl, body)
    }

}