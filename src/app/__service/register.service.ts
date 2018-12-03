import { AppService } from './app.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';


@Injectable()
export class RegisterService {
    

    constructor(private http: AppService) {

    }

    post(body) {
        return this.http.post(environment.voter.url, body)
    }

}