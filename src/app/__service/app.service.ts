import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AppService {

    headers = new HttpHeaders({
        'Content-type': 'application/json'
    })

    constructor(private http: HttpClient) {

    }

    get(url) {
        return this.http.get(url)
    }

    post(url, body) {
        let resp, error
        
        return this.http.post(url, body, { headers: this.headers})
    }

    put(url, token, body) {
        let h = new HttpHeaders({
            'Content-type': 'application/json',
            'x-token': `${token}`
        })
        return this.http.put(url, body, {headers: h})
    }

}