import { AppService } from './app.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UrnaService {
    constructor(private http: AppService) {

    }

    getCandidateByElection(code, year) {
        return this.http.get(`${environment.candidate.numberElectionUrl}/${code}/election/${year}`)
    }

    getElection(year) {
        return this.http.get(environment.election.url + '/year/' + year)
    } 

    getVoterByToken(token) {
        return this.http.get(environment.voter.checkTokenUrl + token)
    }

    put(token, body) {
        return this.http.put(environment.vote.url, token, body)
    }
}