import { Component, OnInit } from '@angular/core';
import { UrnaService } from 'src/app/__service/urna.service';
import { TokenService } from 'src/app/__service/token.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {

  constructor(private http: UrnaService, private __token: TokenService, private __router: Router, private __App: AppComponent) { }

  number: string;
  numbers: object;
  index: number;
  year: number

  election;
  candidate;
  voter;

  description;
  name;
  partyName;

  ngOnInit() {
    this.number = '';
    this.numbers = [' ', ' ', ' ', ' ', ' ', ' '];
    this.index = 0;
    let date = new Date().getFullYear();
    this.year = date;
    this.getElection()
    this.getVoter()
  }

  getVote(value) {
    if (this.number.length < 6) {
      this.number += value
      this.numbers[this.index] = this.number.split('')[this.index]
      this.index++
    }
  }

  corrige() {
    this.number = ''
    window.location.reload()
  }

  confirma() {
    console.log(this.candidate)
    console.log(this.election)
    console.log(this.voter)

    let vote = {
      electionId: this.election['id'],
      voterId: this.voter['id'],
      candidateNumber: this.candidate['numberElection']
    };

    try {
      this.http.put(this.__token.getToken(), vote).subscribe(dados => console.log(dados))
    } catch(e) {
    }

    this.__App.urna = !this.__App.urna;
    this.__router.navigate(['/sucess']);

  }

  setVoteWhite() {
    this.number = null
  }

  getCandidate() {
    try {
      this.http.getCandidateByElection(this.number, this.election.id).subscribe(dados => {
        if (Object.keys(dados)[0] == 'id') {
          this.description = dados['electionOutput'].description;
          this.name = dados['name'];
          this.partyName = dados['partyOutput'].name;
          this.candidate = dados;
        }

      }, error => {
        console.log(error.error.message)
      })
    } catch (e) {

    }
  }

  getElection() {
    try {
      this.http.getElection(this.year).subscribe(dados => {
        if (Object.keys(dados)[0] == 'id') {
          this.election = dados
        }
      }, error => {
        window.alert(error.error.message)
      })
    } catch (e) {

    }
  }

  getVoter() {
    this.http.getVoterByToken(this.__token.getToken()).subscribe(dados => {
      if(Object.keys(dados)[0] == 'id') {
        this.voter = dados
      }
    }, erro => {
      console.log('erro get Voter')
    })
  }
}
